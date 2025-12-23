# 🚀 Vue 3 Personal To-Do App - Build Assignment

## 📋 What You're Building

A **personal to-do list app** where you can:

- ✅ Add new tasks to your list
- 🎯 Set task priorities (High, Medium, Low)
- ✔️ Mark tasks as complete/incomplete
- 🗑️ Delete tasks you no longer need
- 🔍 Filter tasks by completion status

**Think**: A simple, clean to-do app just for you!

---

## 🎨 What It Should Look Like

Your app should have these **3 main sections**:

1. **📝 Add Task Form** (top)

   - Text input for task name
   - Dropdown for priority (High/Medium/Low)
   - "Add Task" button

2. **🔘 Filter Buttons** (middle)

   - Three buttons: "All Tasks", "Completed", "Pending"

3. **📋 Task List** (bottom)
   - List of your tasks
   - Each task shows: task name, priority color, complete checkbox, delete button

---

## ⚙️ Technical Requirements

### 🏗️ **Components You Must Create**

**1. App.vue** (main app)

- Contains all other components
- Manages the main tasks array

**2. TaskForm.vue**

- Form to add new tasks
- **Props**: none needed
- **Events**: Emits `add-task` with task data

**3. TaskFilter.vue**

- Three filter buttons
- **Props**: `currentFilter`
- **Events**: Emits `filter-change` with filter type

**4. TaskList.vue**

- Shows all tasks
- **Props**: `tasks` (filtered task array)
- **Slots**: Use a slot for custom task layout

**5. TaskItem.vue**

- Single task display
- **Props**: `task` object
- **Events**: Emits `toggle-complete` and `delete-task`

### 📊 **Data Structure**

```javascript
// Task Object (keep it simple!)
{
  id: 1,
  title: "Learn Vue 3 basics",
  priority: "High", // "High", "Medium", "Low"
  completed: false
}
```

### 🔧 **Vue 3 Features to Use**

✅ **Composition API**: Use `ref()` and `reactive()` for data  
✅ **Props**: Pass data from parent to child components  
✅ **Events**: Child components talk to parents via emit  
✅ **Slots**: Make TaskList flexible  
✅ **Computed Properties**: For filtering tasks

---

## 🎯 Step-by-Step Implementation

### **Phase 1: Setup** 🚀

1. Create new Vue 3 project
2. Set up Git repository
3. Make first commit: `git add . && git commit -m "feat: initial setup"`

### **Phase 2: Basic Task Display** 📋

1. Create TaskItem component (display one task)
2. Create TaskList component (display multiple tasks)
3. Add some dummy tasks in App.vue to test
4. Commit: `git commit -m "feat: add task display components"`

### **Phase 3: Add Tasks** ➕

1. Create TaskForm component
2. Connect form to App.vue (add new tasks to array)
3. Test adding tasks works
4. Commit: `git commit -m "feat: add task creation"`

### **Phase 4: Task Actions** ⚡

1. Add complete/incomplete toggle functionality
2. Add delete task functionality
3. Test both features work
4. Commit: `git commit -m "feat: add task actions"`

### **Phase 5: Filtering** 🔍

1. Create TaskFilter component
2. Add computed property to filter tasks
3. Connect filter buttons to show/hide tasks
4. Commit: `git commit -m "feat: add task filtering"`

### **Phase 6: Polish** ✨

1. Add some basic CSS styling
2. Make priority levels show different colors
3. Test everything works smoothly
4. Final commit: `git commit -m "feat: complete todo app"`

---

## ✅ Success Criteria

Your app is complete when:

- [ ] You can type a task and add it to your list
- [ ] You can set High/Medium/Low priority when adding
- [ ] You can check/uncheck tasks as complete
- [ ] You can delete tasks
- [ ] Filter buttons work (All/Completed/Pending)
- [ ] Each component uses props and events correctly
- [ ] Your code is committed to Git with clear messages
- [ ] Priority levels have different colors (red/yellow/green)

---

## 🎁 Bonus Features (If You Want More Challenge!)

- 💾 Save tasks to localStorage (tasks stay after page refresh)
- 📅 Add due dates to tasks
- 🌙 Add a dark mode toggle
- 📱 Make it look good on mobile

**Time Estimate**: 2-4 hours for core features

---

## 💡 Tips for Success

- Start with TaskItem first - get one task showing correctly
- Use Vue DevTools to debug props and events
- Test each feature before moving to the next
- Don't worry about fancy styling until everything works
- Commit your code often - every time something new works!
