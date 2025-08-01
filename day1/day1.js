
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const catImage = document.getElementById("catImage");
  const breed = document.getElementById("breed");
  const weight = document.getElementById("weight");
  const description = document.getElementById("description");

  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.toLowerCase();

    // cat api
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const breeds = await res.json();

    // breed
    const match = breeds.find(b => b.name.toLowerCase().includes(query));

    if (match) {
      breed.textContent = match.name;
      weight.textContent = match.weight.metric + " kg";
      description.textContent = match.description;

      // img
      const imageRes = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${match.id}`);
      const imageData = await imageRes.json();
      catImage.src = imageData[0]?.url || "https://via.placeholder.com/300x400";
    } else {
      breed.textContent = "";
      weight.textContent = "";
      description.textContent = "No cat breed found.";
      catImage.src = "https://via.placeholder.com/300x400";
    }
  });

