

export default function TabButton({ children }) {
  
    function ShowText() {
        console.log(`View clicked for ${children}`);
        return (
            <div>
                <h1>Our Story</h1>
                <p>Check out our story.</p>
            </div>
        )
    }
  return (
    <>
      <button onClick={ShowText}>{children}</button>
    </>
  );
}
