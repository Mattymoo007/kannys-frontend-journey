# 🚀 Personal Task Manager with Team Collaboration

_Get ready to build something awesome! This project will level up your Vue 3 skills while creating a super useful app! 💪_

## 🎯 Mission Brief

You're going to create an epic task management app where users can create, edit, and share task lists with their teammates. Think Trello meets your personal to-do list, but way cooler! ✨

---

## 🏗️ Core Requirements

### 🧩 **Component Structure & Props**

- 🎨 Create a `TaskList` component that accepts these sweet props: `listTitle`, `tasks`, and `isEditable`
- ⚡ Build a `TaskItem` component with props: `task`, `priority`, `assignedUser`
- 👤 Craft a `UserCard` component that shows off user info via props

### 🔄 **Reactive Data & Composition API**

- 🎪 Use `ref()` and `reactive()` to juggle task states, user preferences, and filter settings
- 🧠 Implement computed properties for filtered tasks (by priority, completion status, or assigned user)
- 🛠️ Create a composable `useTaskManager()` that handles all your task CRUD operations like a boss!

### 🎉 **Events Galore**

- 📡 Emit custom events: `task-completed`, `task-deleted`, `priority-changed`
- 📝 Handle form submissions for adding shiny new tasks
- 🖱️ Implement click events for task interactions and status toggles

### 🎰 **Slots Magic**

- 🎯 Add named slots in `TaskItem` for custom action buttons
- 🔍 Use scoped slots to let parent components customize how task metadata displays
- 🏗️ Create a flexible layout component with header, content, and footer slots

### 🌟 **Git Integration Adventure**

- 🎬 Initialize your project as a Git repository (your coding journey begins!)
- 🌿 Create feature branches for each major component
- 💬 Practice meaningful commit messages following conventional commits format
- 🔀 Merge branches and resolve any conflicts like a pro
- 🏷️ Tag releases when you complete major milestones

---

## 🎁 Bonus Challenges (For the Brave!)

- 💾 Add local storage persistence for tasks (because nobody likes losing their work!)
- 🎪 Implement drag-and-drop task reordering (so satisfying!)
- 🌙 Create a dark/light theme toggle using reactive data
- 🔍 Add task filtering and search functionality (find that needle in the haystack!)

---

## 🎮 Getting Started

1. **🚀 Setup Phase**: Initialize your Vue 3 project and Git repo
2. **🏗️ Build Phase**: Start with basic task creation, then gradually add the collaborative features
3. **✨ Polish Phase**: Add those bonus features and make it shine!
4. **🎉 Celebrate Phase**: Show off your amazing creation!

---

## 💡 Pro Tips

- Start simple and build up gradually 📈
- Test each component as you go 🧪
- Don't forget to commit often! 💻
- Have fun with the styling - make it uniquely yours! 🎨

**Remember**: This isn't just about learning Vue 3 - you're building something genuinely useful while mastering component communication, state management, event handling, and Git workflow!

Now go forth and code something amazing! 🌟👨‍💻👩‍💻
