import { useRef, useState } from "react";
import SearchStyle from "./search.style";
import { FaSearch } from "react-icons/fa";
import useMap, { SearchKeywordResult } from "@/hooks/utils/useMap";
import useExternalClick from "@/hooks/utils/useExternalClick";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchKeyword, updateCenter } = useMap();
  const [places, setPlaces] = useState<SearchKeywordResult[]>([]);

  const resetPlaces = () => {
    setPlaces([]);
  };

  const searchRef = useExternalClick<HTMLDivElement>(resetPlaces);

  const handleSearchPlace = (e: React.FormEvent) => {
    e.preventDefault();

    const value = inputRef.current!.value;
    if (value === "" || value.trim() === "") {
      return;
    }

    searchKeyword(value, setPlaces);
  };

  const handleSelectPlace = (lat: number, lng: number) => {
    updateCenter(lat, lng);
    resetPlaces();
  };

  return (
    <SearchStyle.Container ref={searchRef}>
      <SearchStyle.Form onSubmit={handleSearchPlace}>
        <SearchStyle.Input
          ref={inputRef}
          type="text"
          placeholder="검색어를 입력하세요"
        />
        <SearchStyle.Button>
          <FaSearch size={14} />
        </SearchStyle.Button>
      </SearchStyle.Form>

      {places.length !== 0 && (
        <SearchStyle.Select>
          {places.map((place) => (
            <li key={place.content}>
              <SearchStyle.Item
                className="text-ellipsis"
                onClick={() =>
                  handleSelectPlace(place.position.lat, place.position.lng)
                }
              >
                {place.content}
              </SearchStyle.Item>
            </li>
          ))}
        </SearchStyle.Select>
      )}
    </SearchStyle.Container>
  );
};

export default Search;
