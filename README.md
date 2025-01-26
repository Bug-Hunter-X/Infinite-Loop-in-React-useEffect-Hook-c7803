# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs due to improper usage of the `useEffect` hook.

## Bug Description
The `useEffect` hook in `bug.js` attempts to update the `count` state in each render, creating an infinite loop. The dependency array `[count]` causes the effect to run whenever `count` changes, leading to a continuous update cycle.

## Solution
The solution in `bugSolution.js` fixes the issue by correctly managing the dependency array. It only updates the count when a specific event occurs (or when a specific condition changes). This approach prevents the infinite loop.