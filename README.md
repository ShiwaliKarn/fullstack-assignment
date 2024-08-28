## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ShiwaliKarn/fullstack-assignment.git
   cd fullstack-assignment
   ```

2. **Frontend:**

   - cd frontend
   - npm install
   - npm run dev

3. **Backend:**

   - cd fullstack-assignment
   - npm install
   - npm run dev

I have not added env file so that my project can run easily.

Answers to the questions:

1. How can you implement shared functionality across a component tree?

   Shared functionality across a component tree can be implemented using several approaches in React:

   - Context API: The React Context API allows you to create global state and functions that can be accessed by any component in the tree without prop drilling. This is ideal for shared state and functionality such as themes, user authentication, and configurations.

   - Custom Hooks: You can create custom hooks that encapsulate shared logic, making it reusable across multiple components. This is useful for handling complex state logic or side effects that need to be shared.

   - Higher-Order Components (HOCs): HOCs are functions that take a component and return a new component with additional props or functionality. They can be used to inject shared functionality across components.

   - Render Props: A pattern where a component takes a function as a prop and calls it with its internal state or functionality, thus providing shared logic.

   - Component Composition: Breaking functionality into smaller components and composing them as needed allows sharing behavior across the tree by using common component props.

2. Why is the useState hook appropriate for handling state in a complex component?

   The useState hook is appropriate for handling state in complex components for several reasons:

   - Local State Management: It allows you to easily manage local component state without needing external libraries or complex configurations.

   - Ease of Use: The syntax is simple and clean, making it easy to declare and update state variables.

   - Reactivity: State changes trigger re-renders, allowing the component to reactively update the UI based on the state.

   - Simplicity in Updating State: The useState hook provides a setter function that can be used to update state in a controlled way, making the state management straightforward even in complex scenarios.

   • Compatibility with Functional Components: Since useState is designed for functional components, it allows the use of React’s modern features like hooks and ensures that the component remains simple and easy to maintain.
