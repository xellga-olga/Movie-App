import React, {useState} from "react";
import Input from "../components/ui/Input";
import { Search } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/Avatar";
import Button from "./ui/Button.jsx";

const SearchBar = ({onSearch}) => {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    onSearch(text);
    console.log('search movie',text);
  }

  return (
    <div className='bg-black flex items-center justify-between p-4 min-h-[80px]'>
      <h1 className="text-4xl font-bold text-white">Search Movie</h1>

      <div className="flex items-center gap-2 w-full max-w-md justify-center">
         <Input
           placeholder="Enter movie name..."
           className="text-gray-700 font-bold"
           onChange={(e) => setText(e.target.value)}
           value={text}
         />
         <Button className='p-2' onClick={handleOnClick}>
           <Search className="h-4 w-4 text-white " />
         </Button>
      </div>

      <Avatar>
        <AvatarImage src="data:image/png;base64,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" alt="Movie Poster" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SearchBar;