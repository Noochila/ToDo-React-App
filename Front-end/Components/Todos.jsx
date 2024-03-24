

export function Todos({ todo }) {


  const handleButtonClick = (item) => {


    fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: item.title, // Use item.title directly
        description: item.description, 
        id:item._id,// Use item.description directly
        completed: true,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle success if needed
       
        alert("Updated Successfully");
      })
      .catch(error => {
        // Handle error
        console.error("Error updating:", error);
        alert("Error updating. Check console for details.");
      });
  };

  return (
    <div>
      {todo.map((item, index) => (
        // Only render if the item is not completed
        !item.completed && (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleButtonClick(item)}>
              Pending
            </button>
          </div>
        )
      ))}
    </div>
  );
  
}
