import "./App.css";
import logo from "./images/logo.png";
import { useState , useEffect } from "react"; 
import rolling from "./images/rolling.png";
import FolderIcon from "@mui/icons-material/Folder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import WindowIcon from '@mui/icons-material/Window';
import video from "./videos/video.mp4"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LeftMenuOptions = [
  {
    id: "Films", 
  },
  {
    id: "People", 
  },
  {
    id: "Planets", 
  },
  {
    id: "Species", 
  },
  {
    id: "Starships", 
  },
  {
    id: "Vehicles", 
  },
]
function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [peopleloading, setpeopleLoading] = useState(true);
  const [planetsloading, setplanetsLoading] = useState(true);
  const [speciesloading, setspeciesLoading] = useState(true);
  const [starshipsloading, setstarshipsLoading] = useState(true);
  const [vehiclesloading, setvehiclesLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmIds = [1, 2, 3, 4, 5, 6];
      const fetchedFilms = [];
      for (const id of filmIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/films/${id}`);
          const data = await response.json();
          fetchedFilms.push(data);
        } catch (error) {
          console.error(`Error fetching film with ID ${id}:`, error);
        }
      }

      setFilms(fetchedFilms);
      setLoading(false)
    };

    const fetchPeople = async () => {
      const peopleIds = [1, 2, 3, 4, 5, 6];
      const fetchedPeople = [];
      for (const id of peopleIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${id}`);
          const data = await response.json();
          fetchedPeople.push(data);
        } catch (error) {
          console.error(`Error fetching film with ID ${id}:`, error);
        }
      }

      setPeople(fetchedPeople);
      setpeopleLoading(false)
    };

    const fetchPlanets = async () => {
      const peopleIds = [1, 2, 3, 4, 5, 6];
      const fetchedPlanets = [];
      for (const id of peopleIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/planets/${id}`);
          const data = await response.json();
          fetchedPlanets.push(data);
        } catch (error) {
          console.error(`Error fetching film with ID ${id}:`, error);
        }
      }
      setPlanets(fetchedPlanets);
      setplanetsLoading(false)
    };

    const fetchSpecies = async () => {
      const peopleIds = [1, 2, 3, 4, 5, 6];
      const fetchedSpecies = [];
      for (const id of peopleIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/species/${id}`);
          const data = await response.json();
          fetchedSpecies.push(data);
        } catch (error) {
          console.error(`Error fetching with ID ${id}:`, error);
        }
      }
      setSpecies(fetchedSpecies);
      setspeciesLoading(false)
    };

    const fetchStarShips = async () => {
      const peopleIds = [1, 2, 3, 4, 5, 6];
      const fetchedStarships = [];
      for (const id of peopleIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/starships/${id}`);
          const data = await response.json();
          fetchedStarships.push(data);
        } catch (error) {
          console.error(`Error fetching film with ID ${id}:`, error);
        }
      }
      setStarships(fetchedStarships);
      setstarshipsLoading(false)
    };

    const fetchVehicles = async () => {
      const peopleIds = [1, 2, 3, 4, 5, 6];
      const fetchedVehicles = [];
      for (const id of peopleIds) {
        try {
          const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
          const data = await response.json();
          fetchedVehicles.push(data);
        } catch (error) {
          console.error(`Error fetching film with ID ${id}:`, error);
        }
      }
      setVehicles(fetchedVehicles);
      setvehiclesLoading(false)
    };

    fetchFilms();
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchStarShips();
    fetchVehicles();

  }, []);

  const [showMobileNav, setShowMobileNav] = useState(true); 
  function showNav(){
    setShowMobileNav(!showMobileNav); 
  }

  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="hidden-nav" onClick={showNav}>{showMobileNav ? <MenuIcon/> : <CloseIcon/>}</div>
        <div className="search">
          <input type="search" placeholder="Search"></input>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="main">
        <LeftMenu showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
        <div className="right">
        <Routes>
              <Route path="/" element={<DefaultSpace/>} />
              <Route path="/films" element={<FilmsSpace films={films} loading={loading}/>} />
              <Route path="/people" element={<PeopleSpace people={people} peopleloading={peopleloading}/>} />
              <Route path="/planets" element={<PlanetSpace planets={planets} planetsloading={planetsloading}/>} />
              <Route path="/species" element={<SpeciesSpace species={species} speciesloading={speciesloading}/>} />
              <Route path="/starships" element={<StarshipsSpace starships={starships} starshipsloading={starshipsloading}/>} />
              <Route path="/vehicles" element={<VehiclesSpace vehicles={vehicles} vehiclesloading={vehiclesloading}/>} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

function FilmsSpace({ films, loading }) {
  return (
    <>
      <div className="right-heading">
        <h2>Films</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          films.map((film) => (
            <div className="film-box" key={film.episode_id}>
              <div className="film-img">
                <img
                  src={`https://source.unsplash.com/random/${film.episode_id}`}
                  alt="film-img"
                />
              </div>
              <div className="film-desc">
                <img src={rolling} alt="roll" className="roll-icon" />
                <h4 className="film-name">{film.title}</h4>
                <div className="three-dot-icon">
                  <MoreVertOutlinedIcon />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

function PeopleSpace({people , peopleloading}){
  return (
    <>
      <div className="right-heading">
        <h2>People</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {peopleloading ? (
          <p className="loading">Loading...</p>
        ) : (
          people.map((people) => (
            <div className="film-box" key={people.name}>
              <div className="people-desc">
                <h4 className="film-name">Name : {people.name}</h4>
                <h4 className="film-name">Birth Date : {people.birth_year}</h4>
                <h4 className="film-name">Species : {people.species.length ? fetch(people.species).species : "No Species Found"}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
function PlanetSpace({planets , planetsloading}){
  return (
    <>
      <div className="right-heading">
        <h2>Planets</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {planetsloading ? (
          <p className="loading">Loading...</p>
        ) : (
          planets.map((planets) => (
            <div className="film-box" key={planets.name}>
              <div className="people-desc">
                <h4 className="film-name">Name : {planets.name}</h4>
                <h4 className="film-name">Climate : {planets.climate}</h4>
                <h4 className="film-name">Gravity : {planets.gravity}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
function SpeciesSpace({species , speciesloading}){
  return (
    <>
      <div className="right-heading">
        <h2>Species</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {speciesloading ? (
          <p className="loading">Loading...</p>
        ) : (
          species.map((species) => (
            <div className="film-box" key={species.name}>
              <div className="people-desc">
                <h4 className="film-name">Name : {species.name}</h4>
                <h4 className="film-name">Homeworld : {species.homeworld}</h4>
                <h4 className="film-name">Lifespan : {species.average_lifespan}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
function StarshipsSpace({starships, starshipsloading}){
  return (
    <>
      <div className="right-heading">
        <h2>Starships</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {starshipsloading ? (
          <p className="loading">Loading...</p>
        ) : (
          starships.map((starships) => (
            <div className="film-box" key={starships.name}>
              <div className="people-desc">
                <h4 className="film-name">Name : {starships.name ? starships.name : "Not Available"}</h4>
                <h4 className="film-name">Model : {starships.model ? starships.model : "Not Available"}</h4>
                <h4 className="film-name">HyperDrive : {starships.hyperdrive_rating ? starships.hyperdrive_rating : "Not Available"}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
function VehiclesSpace({vehicles, vehiclesloading}){
  return (
    <>
      <div className="right-heading">
        <h2>Vehicles</h2>
        <div className="grid-swap">
          <div className="grid-p">
            <WindowIcon fontSize="small" />
            Grid
          </div>
          <div className="list-swap">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="space">
        {vehiclesloading ? (
          <p className="loading">Loading...</p>
        ) : (
          vehicles.map((vehicles) => (
            <div className="film-box" key={vehicles.name}>
              <div className="people-desc">
                <h4 className="film-name">Name : {vehicles.name ? vehicles.name : "Not Available"}</h4>
                <h4 className="film-name">Model : {vehicles.model ? vehicles.model : "Not Available"}</h4>
                <h4 className="film-name">Top Speed : {vehicles.max_atmosphering_speed ? vehicles.max_atmosphering_speed : "Not Available"}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

function DefaultSpace(){
  return(
  <div className="default-space">
    <div className="video">
    <video src={video} autoPlay muted loop></video>
    </div>
    <img src="https://picsum.photos/800/500?random=1" alt="img"></img>
    <div className="default-content">
      <h1>Welcome to Star Wars Dashboard</h1>
      <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
    </div>
  </div>
  )
}


function LeftMenu({showMobileNav, setShowMobileNav}) {

  const [selectedOption, setSelectedOption] = useState(null);

  function handleNavigate(id){
    if(id === "Films"){
      navigateTo("/films");
    }
    if(id === "People"){
      navigateTo("/people");
    }
    if(id === "Planets"){
      navigateTo("/planets");
    }
    if(id === "Species"){
      navigateTo("/species");
    }
    if(id === "Starships"){
      navigateTo("/starships");
    }
    if(id === "Vehicles"){
      navigateTo("/vehicles");
    }

    setSelectedOption(id);
    setShowMobileNav(true);
  }

  const navigateTo = useNavigate();
  return (
    <>
      <div className={`left ${showMobileNav ? "left-hidden" : ""}`}>
        { LeftMenuOptions.map((option)=>{
          return <div className={`left-Nav ${selectedOption === option.id ? "selected" : ""}`} onClick={()=>{handleNavigate(option.id)}}>
          <FolderIcon /> <h2>{option.id}</h2>{" "}
          <div className="right-icon">
            <ChevronRightIcon />
          </div>
        </div>
        })
        }
      </div>
    </>
  );
}

export default App;
