# 🧪 AITACA Angular Frontend Challenge

**⏰ Estimated Time:** 3 hours

**👤 Candidate:** `[Your Full Name Here]`

## 📝 Overview

Build a "Book Tracker" app with Angular (v16+). The app will let users:

- Add a book with title, author, and status (read/unread)
- View a list of all added books
- Navigate between "Add Book" and "Book List" pages
- Mark a book as read/unread
- All data will be stored in memory (no backend)

## 📚 Requirements

### 1. Pages and Routing
Implement routing between:
- `/add` → "Add Book" page
- `/list` → "Book List" page
- Add a navigation bar with links

### 2. Add Book Page
Reactive Angular form with fields:
- **Title** (required)
- **Author** (required)
- **Status** (read / unread, select or radio)
- Form should use FormBuilder and validation
- On submission, store the book in a shared signal-based service

### 3. Book List Page
- Display all stored books in a styled table or list
- Allow toggling the book's status (read/unread) inline
- Indicate clearly which books are read/unread (e.g., via color)

### 4. Signals & State Management
- Use Angular signals to store the book list in a service
- Make sure the component subscribes reactively using signals

### 5. Styling
- Use HTML5, CSS, and optionally Angular Material to style the pages (basic layout, buttons, inputs)

### 6. TypeScript Best Practices
- Use strong types for the Book interface
- Ensure all functions and variables are typed properly

### 7. Unit Testing
Write at least 2 unit tests:
- One for the book service
- One for a form component or utility function

### 8. Git Usage
- Create a personal branch with format `lastname-firstname`
- Push the code to your personal branch in the repository
- Use at least 3 commits with meaningful messages

## ✅ Bonus (optional)

If time allows:
- Add a filter to view only read/unread books

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/aitacaremote/book-tracker.git
cd book-tracker
```

2. Create your personal branch
```bash
git checkout -b lastname-firstname
# Example: git checkout -b smith-john
```

3. Install dependencies
```bash
yarn install
# or
npm install
```

### Development

Start the development server:
```bash
yarn start
# or
npm start
```

The app will be available at `http://localhost:4200`

### Testing

Run the test suite:
```bash
yarn test
# or
npm test
```

Run tests in watch mode:
```bash
yarn test:watch
# or
npm run test:watch
```

Run tests with coverage:
```bash
yarn test:coverage
# or
npm run test:coverage
```

### Build

Build the project for production:
```bash
yarn build
# or
npm run build
```

## 📋 Project Structure

The project structure is already set up with placeholder files:

```
src/
├── app/
│   ├── components/
│   │   ├── add-book/                 # ← Implement your Add Book component
│   │   │   ├── add-book.component.ts
│   │   │   ├── add-book.component.html  
│   │   │   └── add-book.component.spec.ts
│   │   └── book-list/                # ← Implement your Book List component
│   │       ├── book-list.component.ts
│   │       ├── book-list.component.html
│   │       └── book-list.component.spec.ts
│   ├── services/
│   │   └── book.service.ts           # ← Implement your Book service with signals
│   ├── shared/
│   │   └── models/
│   │       └── book.model.ts         # ← Already contains Book interface
│   ├── app.component.ts              # ← Basic navigation setup
│   ├── app.component.html
│   └── app.routes.ts                 # ← Route configuration ready
├── assets/
└── environments/
```

All files are created with basic structure - you need to implement the actual functionality!

## 🧪 Testing Framework

This project uses **Jest** instead of Karma for testing, providing:
- Faster test execution
- Better TypeScript support
- Snapshot testing capabilities
- Built-in code coverage reports

## 📤 Submission

### Git Workflow

1. **Work on your personal branch**
   ```bash
   git checkout lastname-firstname
   ```

2. **Make your commits** (at least 3 with meaningful messages)
   ```bash
   git add .
   git commit -m "feat: implement book service with signals"
   git add .
   git commit -m "feat: create add-book component with reactive forms"
   git add .
   git commit -m "feat: create book-list component with status toggle"
   ```

3. **Push your branch to the repository**
   ```bash
   git push origin lastname-firstname
   ```

4. **Submit your work**
   - Send us the link to your branch: `https://github.com/aitacaremote/book-tracker/tree/lastname-firstname`
   - Make sure the app compiles and the instructions are clear
   - Include your full name in this README.md or in your commits 