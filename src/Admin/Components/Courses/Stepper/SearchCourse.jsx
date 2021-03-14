import React, {useState} from "react";
import Input from "../../../../Components/Shared/Form/Input";

function SearchCourse() {
  const [input, setInput] = useState({
    search: "",
  });

  const handleChange = (input, setInput, event) => {
    event.persist();
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <div className="Stepper__SearchCourse">
      <h3>What about a name for your Course?</h3>
      <p>
        If you can't think of a name now, no worries, you can change it later...
      </p>
      <form>
        <Input
          type="text"
          value={input.search}
          icon={``}
          name="search"
          id="search"
          onChange={(e) => handleChange(input, setInput, e)}
          placeholder="E.g. Digital Marketing, Branding..."
        />
      </form>
    </div>
  );
}

export default SearchCourse;
