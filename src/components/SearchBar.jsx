import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Pesquisar no Firefox..."
      />
      <Button type="submit">Pesquisar</Button>
    </form>
  );
}

export default SearchBar;
