1. What is the difference between Component and PureComponent? give an
example where it might break my app.

If you use React.Component then the child component is also re-rendered if the parent component re-renders itself but in the React. PureComponent, the child component only re-renders if the props passed to it changes.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

Cause both will cause rerenders on the components.

3. Describe 3 ways to pass information from a component to its PARENT.

Throught a function sent as props to the Child.
Using Context API.
Using Redux.

4. Give 2 ways to prevent components from re-rendering.

useMemo and UseRef.

5. What is a fragment and why do we need it? Give an example where it might
break my app.

I don't know.

6. Give 3 examples of the HOC pattern.

I don't know.

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

Callback, you pass a function as an arg for another function.
Promise is a result of an operation async, it can be pending, resolved or rejected.
Async Await is a way to make promises, you define a function as async and inside you can declare await for a value that is an outcome for an async operation.   

8. How many arguments does setState take and why is it async.

2 arguments, cause it would take a lot from the browser to keep watching it.

9. List the steps needed to migrate a Class to Function Component.

Don't remember.

10. List a few ways styles can be used with components.

Styled Components, TailWind, SASS...

11. How to render an HTML string coming from the server.

I don't know.