from fastapi import FastAPI, HTTPException, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.exceptions import HTTPException as StarletteHTTPException

from schemas import PostCreate, PostResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


templates = Jinja2Templates(directory="templates")
# templates obj to look for templates from our 'templates' dir.

posts: list[dict] = [
    {
        "id": 1,
        "author": "Ayush Singh",
        "title": "FastAPI is Awesome",
        "content": "This framework is really easy to use and super fast.",
        "date_posted": "September 2, 2026",
    },
    {
        "id": 2,
        "author": "Jane Doe",
        "title": "Python is great for Web Development.",
        "content": "Python is a great language for web development, and FastAPI makes it even better.",
        "date_posted": "Septemeber 2, 2026",
    },
]



@app.get("/", include_in_schema=False, name="home") # http://localhost:8000
@app.get("/posts", include_in_schema=False, name="hosts") # http://localhost:8000/posts
# same output as above, different address. 'include_in_schema' hides these html routes from the swagger docs(API docs), restricting them strictly for users only.
def home(request: Request):
    return templates.TemplateResponse(
        request,
        "home.html", 
        {"posts": posts, "title": "Home"},
        ) # looping over the list of dic items "posts", using 'posts' obj and Jinja 2 loops in 'home.html' file.

@app.get("/posts/{post_id}", include_in_schema=False) #path parameter -> {}
def post_page(request: Request, post_id: int):
    for post in posts:
        if post.get("id") == post_id:
            title = post['title'][:50]
            return templates.TemplateResponse(
                request,
                "post.html", 
                {"post": post, "title": title},
            )
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found.")


@app.get("/api/posts", response_model=list[PostResponse])
def get_posts():
    return posts

@app.post(
    "/api/posts",response_model=PostResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_post(post: PostCreate):
    new_id = max(p["id"] for p in posts) + 1 if posts else 1
    new_post = {
        "id": new_id,
        "title": post.title,
        "author": post.author,
        "content" : post.content,
        "date_posted": "September 8, 2026",
    }
    posts.append(new_post)
    return new_post


@app.get("/api/posts/{post_id}", response_model=PostResponse) #path parameter -> {}
def get_post(post_id: int):
    for post in posts:
        if post.get("id") == post_id:
            return post
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Post not found.")


@app.exception_handler(StarletteHTTPException)
# for urls like: "http://localhost:8000/posts/50"; cause highest p_id =2;
def general_http_exception_handler(request: Request, exception: StarletteHTTPException):
    message = (
        exception.detail
        if exception.detail
        else "An error occurred. Please check your request and try again."
    )

    if request.url.path.startswith("/api"):
        return JSONResponse(
            status_code=exception.status_code,
            content={"detail": message},
        )
    return templates.TemplateResponse(
        request,
        "error.html",
        {
            "status_code": exception.status_code,
            "title": exception.status_code,
            "message": message,
        },
        status_code=exception.status_code,
    )
    
@app.exception_handler(RequestValidationError) 
# for url like: "http://localhost:8000/posts/hello"
def validation_exception_handler(request: Request, exception: RequestValidationError):
    if request.url.path.startswith("/api"):
        return JSONResponse(
            status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
            content={"detail": exception.errors()},
        )
    return templates.TemplateResponse(
        request,
        "error.html",
        {
            "status_code": status.HTTP_422_UNPROCESSABLE_CONTENT,
            "title": status.HTTP_422_UNPROCESSABLE_CONTENT,
            "message": "Invalid request. Please check your input and try again.",
        },
        status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
    )
