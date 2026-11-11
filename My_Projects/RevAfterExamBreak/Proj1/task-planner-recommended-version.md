# Dynamic Task and Priority Planner: Recommended Version

This document contains my recommended version of your project (HTML, CSS and vanilla JS), followed by a detailed explanation of every line that differs from your code, with comparisons, recommendations and learning notes.

**What stays the same:** the same layout, the same element IDs and class names, the same stored data shape (an array of `{ title, priority, dueDate }` objects under the `"details"` key), and the same Add / View All / Delete All behavior.

**Two things I went slightly beyond "exactly the same":**
1. Your **View High Priority** and **View Low Priority** buttons were empty stubs. With the structure below they become a few lines each, so I wired them up. If you'd rather keep them empty for now, delete those two handlers and nothing else breaks.
2. The priority field is a dropdown (`High` / `Low`) instead of free text. This makes the filter buttons reliable. Details are in the explanation section.

---

## 1. `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Task and Priority Planner</title>
    <link rel="stylesheet" href="index.css" />
</head>

<body>
    <div class="container-1">
        <input id="title-1" type="text" placeholder="Title" aria-label="Task title">
        <select id="priority-1" aria-label="Task priority">
            <option value="" disabled selected>Priority</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
        </select>
        <input id="due-date-1" type="date" aria-label="Due date">
        <button type="button" id="add-btn-1">Add</button>
        <button type="button" id="view-all">View All</button>
        <button type="button" id="view-highP">View High Priority</button>
        <button type="button" id="view-lowP">View Low Priority</button>
        <button type="button" id="delete-all">Delete All</button>
    </div>
    <div class="local-storage-view"></div>

    <script src="index.js"></script>
</body>

</html>
```

---

## 2. `index.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container-1 {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #f1f1f1;
    border: 1px solid black;
    padding: 5px;
    font-size: 20px;
    text-align: center;
}

input,
select {
    text-align: center;
    text-align-last: center;
}

input::placeholder {
    color: lightcoral;
    opacity: 1;
}

button {
    width: 100px;
    height: 20px;
}

#view-highP,
#view-lowP {
    width: 150px;
}

.local-storage-view {
    margin-top: 5px;
    width: 100%;
    height: 500px;
    padding: 10px;
    background-color: bisque;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    overflow-y: auto;
    color: red;
    font-weight: bold;
    font-size: 25px;
}
```

---

## 3. `index.js`

```js
const STORAGE_KEY = "details"

const addBtn = document.getElementById("add-btn-1")
const deleteAllBtn = document.getElementById("delete-all")
const viewAllBtn = document.getElementById("view-all")
const viewHighPBtn = document.getElementById("view-highP")
const viewLowPBtn = document.getElementById("view-lowP")
const title1 = document.getElementById("title-1")
const priority1 = document.getElementById("priority-1")
const dueDate1 = document.getElementById("due-date-1")
const db = document.querySelector(".local-storage-view")

let details = loadTasks()

function loadTasks() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        const parsed = stored ? JSON.parse(stored) : []
        return Array.isArray(parsed) ? parsed : []
    } catch (error) {
        return []
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(details))
}

function renderTasks(tasksToShow, emptyMessage) {
    db.textContent = ""

    if (tasksToShow.length === 0) {
        const messageDiv = document.createElement("div")
        messageDiv.textContent = emptyMessage
        db.appendChild(messageDiv)
        return
    }

    for (const task of tasksToShow) {
        const taskDiv = document.createElement("div")
        taskDiv.textContent = `Title: ${task.title}, Priority: ${task.priority}, DueDate: ${task.dueDate}`
        db.appendChild(taskDiv)
    }
}

addBtn.addEventListener("click", function () {
    const title = title1.value.trim()
    const priority = priority1.value
    const dueDate = dueDate1.value

    if (!title || !priority || !dueDate) {
        window.alert("Please fill in the title, priority and due date.")
        return
    }

    details.push({ title, priority, dueDate })
    saveTasks()

    title1.value = ""
    priority1.value = ""
    dueDate1.value = ""

    window.alert("Data Saved Successfully!")
})

viewAllBtn.addEventListener("click", function () {
    renderTasks(details, "No tasks saved yet.")
})

viewHighPBtn.addEventListener("click", function () {
    const highTasks = details.filter(function (task) {
        return task.priority === "High"
    })
    renderTasks(highTasks, "No high priority tasks.")
})

viewLowPBtn.addEventListener("click", function () {
    const lowTasks = details.filter(function (task) {
        return task.priority === "Low"
    })
    renderTasks(lowTasks, "No low priority tasks.")
})

deleteAllBtn.addEventListener("click", function () {
    details = []
    localStorage.removeItem(STORAGE_KEY)
    db.textContent = ""
})
```

---

# Explanation of Every Difference From Your Code

Each item shows **your version**, **my version**, **why it differs**, and a **recommendation or learning note**.

---

## A. JavaScript changes

### A1. `const STORAGE_KEY = "details"` (new line)

| | |
|---|---|
| **Yours** | The string `"details"` is typed in three places: `setItem`, `getItem`, and (implicitly) `clear`. |
| **Mine** | The key lives in one constant, used everywhere. |

**Why:** If you ever rename the key (say to `"tasks"`) or mistype it in one place (`"detials"`), you'd get a silent bug: JavaScript won't complain, you'll just read `null` back. A constant means one edit fixes everything, and a typo in the constant *name* throws a visible error instead of failing quietly.

**Learning:** Values that are used in several places and must always match are called "magic strings" when they're typed out repeatedly. Giving them a name is one of the cheapest bug-prevention habits.

---

### A2. `let details = loadTasks()` instead of `let details = []`

| | |
|---|---|
| **Yours** | `details` starts as an empty array every time the page loads. |
| **Mine** | `details` starts with whatever is already saved in localStorage. |

**Why this matters (this is the most important fix in the file):** In your version, refresh the page and add one new task. `details` is `[]`, so it becomes `[newTask]`, and `setItem` **overwrites** everything that was saved before. All your old tasks are silently lost. It's easy to miss while testing because you've probably been adding tasks without refreshing.

You can reproduce it: add two tasks, refresh the page, add a third, click View All. You'll see only one.

**Recommendation:** Always initialise your in-memory state from storage when the app starts.

**Learning:** localStorage persists, but your JavaScript variables don't. Every page load starts your variables from scratch, so your code has to re-load saved data into them.

---

### A3. The `loadTasks()` function (new)

```js
function loadTasks() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        const parsed = stored ? JSON.parse(stored) : []
        return Array.isArray(parsed) ? parsed : []
    } catch (error) {
        return []
    }
}
```

Line by line:

- **`function loadTasks() {`**: wraps the "read from storage" logic in one named, reusable place. Yours did this inline inside the View All handler.
- **`try {`**: `JSON.parse` throws an error if the stored text isn't valid JSON (for example, if the data got corrupted or another script wrote something else under the same key). Without `try/catch`, that error would crash your script at startup and none of your buttons would work.
- **`const stored = localStorage.getItem(STORAGE_KEY)`**: same as your `storedDetails` line. Note that `getItem` returns `null` when the key doesn't exist.
- **`const parsed = stored ? JSON.parse(stored) : []`**: this is the fix for another bug in your code. In your version, if nothing is saved yet (first visit, or right after Delete All), `getItem` returns `null`, `JSON.parse(null)` returns `null`, and then `parsedDetails.length` throws `Cannot read properties of null`. The `? :` (ternary) says "if there is stored text, parse it; otherwise use an empty array."
- **`return Array.isArray(parsed) ? parsed : []`**: a safety net. Even if the stored text is valid JSON, it might not be an array (for example `"hello"` or `{}`). Later code calls `.push` and `.filter`, which only exist on arrays, so we guarantee an array.
- **`} catch (error) { return [] }`**: if anything above fails, start with an empty list instead of crashing.

**Recommendation:** Treat anything coming out of localStorage as untrusted input. Users can edit it in dev tools, and other code on the same site can overwrite it.

**Learning:** `try/catch` is for operations that can fail for reasons outside your control (parsing, network, storage). You don't need it around everything, only around those risky points.

---

### A4. The `saveTasks()` function (new)

```js
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(details))
}
```

**Yours:** the same `setItem(..., JSON.stringify(details))` line sits inside the Add handler.
**Mine:** the identical logic, moved into a function.

**Why:** Right now only Add saves data, so this looks like unnecessary ceremony. But the moment you add "delete one task" or "edit a task", you'll need to save from those places too. One `saveTasks()` function means saving always works the same way everywhere. It also mirrors `loadTasks()`, so reading and writing live side by side.

---

### A5. The `renderTasks(tasksToShow, emptyMessage)` function (new)

```js
function renderTasks(tasksToShow, emptyMessage) {
    db.textContent = ""

    if (tasksToShow.length === 0) {
        const messageDiv = document.createElement("div")
        messageDiv.textContent = emptyMessage
        db.appendChild(messageDiv)
        return
    }

    for (const task of tasksToShow) {
        const taskDiv = document.createElement("div")
        taskDiv.textContent = `Title: ${task.title}, Priority: ${task.priority}, DueDate: ${task.dueDate}`
        db.appendChild(taskDiv)
    }
}
```

| | |
|---|---|
| **Yours** | The display loop lives inside the View All handler. |
| **Mine** | The display loop lives in one function that takes *any list of tasks* and draws it. |

**Why:** You have three view buttons (All, High, Low) that all do the same thing: show a list of tasks. If the loop stays inside View All, you'd copy and paste it into the other two handlers, and any later change (new field, different format) would need three edits. With `renderTasks`, each button only decides *which tasks* to show, and this function handles *how* they're shown.

Line by line:

- **`db.textContent = ""`**: same clearing you already do. It stays at the top so every render starts clean.
- **`if (tasksToShow.length === 0) {...}`**: handles the empty case. In your version, View All on an empty list just shows a blank box, which looks like the button is broken. A message tells the user what happened. The `return` ends the function early so the loop below doesn't run.
- **`for (const task of tasksToShow)`**: replaces your `for (let i = 0; i < parsedDetails.length; i++)` loop.
  - `for...of` hands you each task directly. Yours uses an index `i`, then reads `parsedDetails[i]` three separate times. That works, but it's more to read and easier to get wrong (off-by-one errors, typing `<=` instead of `<`).
  - `const` instead of `let`, since `task` is never reassigned.
- **Removal of `currentTitle`, `currentPriority`, `currentDueDate` variables:** these three temporary variables just copied values that the template string can read directly as `task.title`, `task.priority`, `task.dueDate`. They aren't wrong, and they're a fine way to learn what's happening, but they add three lines with no benefit once you're comfortable with objects.
- **`const taskDiv = document.createElement("div")`**: same as your `divContent`. I renamed it so the name says what it is (a task's div). Good names reduce the need for comments.
- **`taskDiv.textContent = ...`**: same template string as yours.
- **`db.appendChild(taskDiv)`**: same as yours.

**Recommendation on `textContent`:** you're already using `textContent` rather than `innerHTML`, which is exactly right. If a user types `<b>hi</b>` as a title, `textContent` shows it as plain text. With `innerHTML` it would be interpreted as HTML, which is the basis of XSS (script injection) bugs. Keep doing this.

**Learning:** "Separate *what* from *how*." The button handlers decide what to show; `renderTasks` decides how. This pattern (state in → display out) is the core idea behind frameworks like React.

---

### A6. The Add handler: no more global `Task` object

**Yours:**

```js
let Task = {}

addBtn.addEventListener("click", function () {
    Task.title = title1.value
    Task.priority = priority1.value
    Task.dueDate = dueDate1.value
    details.push(Task)
    Task = {}
    ...
```

**Mine:**

```js
addBtn.addEventListener("click", function () {
    const title = title1.value.trim()
    const priority = priority1.value
    const dueDate = dueDate1.value
    ...
    details.push({ title, priority, dueDate })
```

**Why:**
- **Your global `Task` is shared state.** It lives outside the handler, and the handler has to remember to reset it with `Task = {}` or the next click would reuse the same object. Your code does reset it correctly, which is the right instinct, but the problem can't happen at all if the object is created fresh each time. If you ever forget that reset line, every entry in the array would point at the *same* object, and all your tasks would change together.
- **Capital `T` in `Task`:** by convention, capitalised names in JavaScript are for classes and constructors. A regular variable is normally `task`.
- **`{ title, priority, dueDate }`:** this is shorthand for `{ title: title, priority: priority, dueDate: dueDate }`. When the variable name matches the key name you want, you can write it once. The result is the same object shape you already store, so existing data stays compatible.
- **`.trim()` on the title:** removes spaces at the start and end, so a title of `"   "` (just spaces) isn't treated as a real title.

**Learning:** Prefer creating things where you use them. Variables declared inside a function disappear when it finishes, which removes a whole category of "leftover state" bugs.

---

### A7. Input validation (new)

```js
if (!title || !priority || !dueDate) {
    window.alert("Please fill in the title, priority and due date.")
    return
}
```

**Yours:** no validation. Clicking Add with empty fields saves a blank task and says "Data Saved Successfully!".

**Mine:** an empty value is "falsy" in JavaScript (`""` is falsy), so `!title` means "title is empty". If any field is empty, we tell the user and `return`, which exits the handler *before* anything is pushed or saved.

**Learning:** The early `return` ("guard clause") is a very common pattern: handle the bad case first and leave, so the rest of the function can assume everything is valid, without nesting it all inside an `if`.

---

### A8. Using `saveTasks()` and clearing the inputs

```js
details.push({ title, priority, dueDate })
saveTasks()

title1.value = ""
priority1.value = ""
dueDate1.value = ""
```

- **`saveTasks()`** replaces the inline `localStorage.setItem(...)` (see A4).
- **Clearing the inputs:** in your version, after Add the old values stay in the fields, so the user has to delete them manually before typing the next task. Setting `.value = ""` resets them. For the `<select>`, setting its value to `""` selects the disabled "Priority" placeholder option again.
- **The alert stays**, as in your version. Alerts block the page until dismissed, so once you're comfortable you may want to swap it for a small message on the page, but it's fine while you're building.

---

### A9. View All reads from `details` instead of re-reading localStorage

**Yours:**

```js
const storedDetails = localStorage.getItem("details")
const parsedDetails = JSON.parse(storedDetails)
db.textContent = ""
for (...) { ... }
```

**Mine:**

```js
renderTasks(details, "No tasks saved yet.")
```

**Why:** Since `details` is loaded from storage at startup (A2) and saved on every change, it always matches what's in localStorage. Reading and parsing again on every click does the same work for the same result, and it's what caused the `null` crash described in A3. With one source of truth in memory, and storage as its backup copy, there's no chance of the two disagreeing.

**Recommendation:** Treat the in-memory array as the "truth", and treat localStorage as a place to persist it between visits.

---

### A10. View High / Low Priority handlers (previously empty)

```js
viewHighPBtn.addEventListener("click", function () {
    const highTasks = details.filter(function (task) {
        return task.priority === "High"
    })
    renderTasks(highTasks, "No high priority tasks.")
})
```

- **`details.filter(function (task) { ... })`**: `filter` goes through the array and returns a **new** array containing only the items for which the function returns `true`. Your original array is untouched.
- **`task.priority === "High"`**: `===` is strict equality (no type conversion), which is the one you should default to over `==`.
- **`renderTasks(highTasks, ...)`**: the same display function from A5 draws the filtered list. This is why that function takes a list as a parameter.
- The Low handler is identical with `"Low"`.

**Learning:** `filter`, `map` and `forEach` are the three array methods you'll use most. `filter` answers "which of these do I want?"

---

### A11. Delete All handler

**Yours:**

```js
db.textContent = ""
localStorage.clear()
```

**Mine:**

```js
details = []
localStorage.removeItem(STORAGE_KEY)
db.textContent = ""
```

Two differences:

1. **`details = []` is new, and it matters.** In your version, Delete All wipes localStorage but the in-memory `details` array still holds all the old tasks. If the user then clicks Add *without refreshing*, `details.push(Task)` adds to the old array, `setItem` writes all the old tasks back, and the "deleted" data returns. Resetting the array fixes that. (This is the same family of bug as A2: memory and storage must be kept in sync.)
2. **`removeItem(STORAGE_KEY)` instead of `clear()`.** `clear()` deletes *everything* stored by your site's origin. Right now that's only `"details"`, but if you later store a theme setting, a username, or anything else, Delete All would wipe those too. `removeItem` deletes only the key this feature owns. Also note that on a local file or on a shared host like `localhost:5500`, other projects of yours on the same origin share the same localStorage, so `clear()` could erase their data too.

**Recommendation:** Be as specific as possible when deleting.

---

### A12. Semicolons and style

I kept your no-semicolon style, so no changes there. JavaScript's automatic semicolon insertion handles it, and many teams use that style. The one rule to know: don't begin a line with `(` or `[` in a no-semicolon codebase, since it can get joined to the previous line. Whichever style you choose, stay consistent.

---

## B. CSS changes

### B1. `flex-wrap: wrap` on `.container-1`

**Yours:** a flex row with five buttons (two at 150px), three inputs, all in one line.
**Mine:** adds `flex-wrap: wrap`.

**Why:** By default, flex items never wrap, so on a narrow window or phone they're squeezed or overflow off-screen. With `wrap`, items drop to a second line when they run out of space.

---

### B2. Moving the inline `text-align` styles into CSS

**Yours:** `style="text-align: center;"` on each input in the HTML.
**Mine:**

```css
input,
select {
    text-align: center;
    text-align-last: center;
}
```

**Why:** Inline styles repeat on every element and have very high priority, which makes them hard to override later. One CSS rule styles every input and keeps the HTML about structure only. `text-align-last: center` is needed for `<select>`, since a dropdown's displayed value isn't a normal line of text and `text-align` alone doesn't center it in most browsers.

**Learning:** HTML = structure, CSS = looks, JS = behavior. Keeping them apart makes each file easier to change.

---

### B3. `.local-storage-view` changes (this is the "hidden data" fix)

| Property | Yours | Mine | Why |
|---|---|---|---|
| `justify-content` | `center` | `flex-start` | **Important.** In a column flex container, `justify-content` works vertically. With `center`, once the tasks are taller than the 500px box, the overflow spills out *equally at the top and bottom*, and the top part can't be scrolled to. That's data that is visibly "lost". `flex-start` stacks from the top, so overflow only goes downward, where scrolling can reach it. |
| `overflow-y` | not set | `auto` | Adds a scrollbar only when the tasks don't fit in the 500px height. This addresses the concern you mentioned earlier, about data being hidden when you have more than 4 or 5 tasks. |
| `padding` | not set | `10px` | Space between the box edge and the first and last tasks. Because `box-sizing: border-box` is set globally, the padding doesn't make the box taller than 500px. |
| `gap` | not set | `8px` | Space between tasks, so they don't touch each other. Works in flex containers without needing margins on each child. |

**Trade-off to know about:** With `flex-start`, the first task is at the top of the box instead of the vertical middle. For a list, that's the expected look. If you want the *empty-state message* centered, you can use `margin: auto` on that message div later.

---

## C. HTML changes

### C1. `<select>` replaces the priority text input

**Yours:** `<input id="priority-1" type="text" placeholder="Priority(High, Low)">`
**Mine:** a dropdown with options `High` and `Low`.

**Why:** With free text, a user can type `high`, `HIGH`, `High `, `hi` or `urgent`. All of them are valid for a text box but only one would match `=== "High"` in the filter. You could clean up the text in code, but a dropdown prevents the problem at the source, also removing the need for the "(High, Low)" hint, since the choices are visible.

- **`<option value="" disabled selected>Priority</option>`** is the placeholder: `disabled` prevents choosing it, `selected` shows it by default, and its empty `value` is what the validation in A7 checks for.
- **`id="priority-1"` is unchanged**, so `document.getElementById("priority-1")` and `priority1.value` work exactly as before. This is a nice example of how keeping IDs stable lets you change an element's type without touching the JS.

**Recommendation:** When there's a fixed set of valid answers, use a control that only allows those answers (select, radio buttons, checkboxes).

---

### C2. `aria-label` attributes

**Yours:** `placeholder` is the only label on the text inputs, and the date input has a `placeholder` attribute.
**Mine:** `aria-label="Task title"`, and so on.

**Why:**
- Placeholders disappear when typing and are not reliably read by screen readers. `aria-label` gives each field a name for assistive technology without changing what sighted users see.
- `placeholder` on `type="date"` does nothing in browsers (the browser draws its own date picker), so I removed it from there.

---

### C3. `type="button"` on every button

**Yours:** `<button id="add-btn-1">Add</button>`
**Mine:** `<button type="button" id="add-btn-1">Add</button>`

**Why:** A `<button>` with no `type` defaults to `type="submit"`. Your buttons aren't inside a `<form>`, so it makes no difference today. But if you wrap the inputs in a `<form>` later (a common step), every button would suddenly submit the form and reload the page. Setting `type="button"` now avoids that surprise.

---

### C4. Unchanged on purpose

- All the IDs and the `.container-1` / `.local-storage-view` class names, so your JS selectors still match.
- The `<script src="index.js"></script>` at the end of `<body>`: it runs after the elements exist, which is why `getElementById` works. (An alternative is putting it in `<head>` with `defer`, but yours is fine.)

---

## D. Summary of what to take away

1. **Memory vs storage:** localStorage persists, variables don't. Load into your variables on startup (A2), and keep them in sync when you delete (A11).
2. **Never assume data exists:** `getItem` can return `null`, and `JSON.parse` can throw (A3).
3. **Separate "what to show" from "how to show it":** one `renderTasks` function feeds three buttons (A5, A10).
4. **Create objects where you use them,** rather than reusing a global one (A6).
5. **Validate input and prefer constrained controls** like a `<select>` (A7, C1).
6. **In a column flex container, `justify-content: center` plus overflow hides the top content.** Use `flex-start` and `overflow-y: auto` (B3).
7. **Delete precisely:** `removeItem` over `clear` (A11).

## E. Good next steps

- Add a **Delete** button on each task: with objects in an array, you can `splice` or `filter` the one you want out, then `saveTasks()` and `renderTasks(details, ...)`.
- Add an **id** to each task (for example `Date.now()`) so you can identify a specific task reliably, even if two have the same title.
- Sort the "View All" list by due date, using `details.slice().sort(...)`, which is much easier now that `dueDate` is its own field.
- Replace `window.alert` with a small inline status message.
