import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfileCard from "../components/Others/ProfileCard/ProfileCard";
import EventCard from "../components/EventCard/EventCard";
import RatingTable from "../components/RatingTable/RatingTable";

const Home = () => {
  const theme = useSelector((state) => state.theme.theme); // Corrected theme selector
  const stateUser = useSelector((state) => state.auth);

  const allianceAPI = "https://marsgame.uz/student/leaderboard/alliance/";
  const usersAPI = "https://marsgame.uz/student/leaderboard/users/";

  const [selected, setSelected] = useState(true);
  const [users, setUsers] = useState([]);
  const [alliance, setAlliance] = useState([]);
  const [loading, setLoading] = useState(true);

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const usersRequest = await axios.get(usersAPI);
        setUsers(usersRequest.data.results);
        // const allianceRequest = await axios.get(allianceAPI);
        // setAlliance(allianceRequest.results);

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); // Set loading to false on error
      }
    }

    fetchData();
  }, [usersAPI]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  console.log("USERS REQUEST:", users);
  console.log('djcown');
  return (
    <main className="w-full flex gap-10 p-5 h-[97vh] glass shadow-lg rounded-2xl overflow-y-auto">
      <div className="flex flex-col flex-auto w-3/6">
        <ProfileCard />
        <EventCard />
      </div>

      <div className="flex flex-auto w-3/6 mt-10">
        <RatingTable
          theme={theme}
          users={selected ? users : alliance}
          alliance={selected}
          selected={selected}
          setSelected={setSelected}
          headerVariants={headerVariants}
          loading={loading}
        />
      </div>
    </main>
  );
};

export default Home;
