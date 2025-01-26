```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The timeout prevents the infinite loop
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return <div>Count: {count}</div>;
}
```