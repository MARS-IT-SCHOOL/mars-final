import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import top1 from '../assets/images/top1.png';
import top2 from '../assets/images/top2.png';
import top3 from '../assets/images/top3.png';
import LeaderboardTable from '../components/RatingTable/LeaderboardTable';


const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topThree, setTopThree] = useState([]);
  const [selectFilter, setSelectFilter] = useState("all")

  const usersAPI = "https://marsgame.uz/student/leaderboard/users/";

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const usersRequest = await axios.get(usersAPI);
        setUsers(usersRequest.data.results);
        const topThreeUsers = usersRequest.data.results.slice(0, 3);
        setTopThree(topThreeUsers);
        setLoading(true);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [usersAPI]);

  return (
    <main className='glass w-full p-5 min-h-screen shadow-lg rounded-2xl overflow-y-auto'>
      <div>
        <div className='flex items-center justify-between'>
          <button
            onClick={() => navigate(-1)}
            className="flex gap-1 items-center px-6 py-2 rounded-lg"
          >
            <IoMdArrowRoundBack className='text-2xl' />
            Go back
          </button>
          <p className='text-lg'>Leaderboard</p>
          <div></div>
        </div>
        <div className='mt-10 justify-center flex text-center'>
          <div role="tablist" className="tabs tabs-lifted w-full">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Top Gamers" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {loading ? (
                <div>
                  <div className='py-10'>
                    <div className='flex items-end justify-center w-full max-w-[80%] mx-auto shadow-lg '>
                      {topThree.length >= 2 && (
                        <div className='bg-red-400 relative bg-opacity-90 rounded-s-2xl flex-1 w-1/3 '>
                          <img className='mask mask-circle size-20 absolute -top-10 left-1/2 -translate-x-1/2' src="https://preview.redd.it/the-shrek-menagerie-v0-252g70camryb1.jpg?width=640&crop=smart&auto=webp&s=3aeea25a14338e7e520a8fa1688be6231d159dc4" alt="" />
                          <div className="text p-7 mt-10">
                            <div className='flex justify-center'>
                              <img src={top2} alt="" className='size-20' />
                            </div>
                            <p className={`text-3xl ${topThree[1]?.username.length >= 7 ? 'text-2xl' : 'text-3xl'} `}>{topThree[1]?.username}</p>
                            <p className='my-2 text-amber-300 font-bold font-mono'>
                              <span className='text-2xl'>
                                {topThree[1]?.exp_user}
                              </span>
                              <sub className='text-xs'>
                                Exp
                              </sub>
                            </p>
                            <p className='flex justify-between text-sm'>
                              <span>Rank:</span>
                              <span>{topThree[1]?.rank}</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {topThree.length >= 1 && (
                        <div className='bg-red-500 relative rounded-t-2xl bg-opacity-90  flex-1 w-1/3'>
                          <img className='mask mask-circle size-20 absolute -top-10 left-1/2 -translate-x-1/2' src="https://preview.redd.it/the-shrek-menagerie-v0-252g70camryb1.jpg?width=640&crop=smart&auto=webp&s=3aeea25a14338e7e520a8fa1688be6231d159dc4" alt="" />
                          <div className="text p-14 ">
                            <div className='flex justify-center'>
                              <img src={top1} alt="" className='size-20' />
                            </div>
                            <p className={`text-3xl ${topThree[2]?.username.length >= 7 ? 'text-xl' : 'text-3xl'} `}>{topThree[0]?.username}</p>
                            <p className='my-4 text-amber-300 font-bold font-mono'>
                              <span className='text-2xl'>
                                {topThree[0]?.exp_user}
                              </span>
                              <sub className='text-xs'>
                                Exp
                              </sub>
                            </p>
                            <p className='flex justify-between text-sm'>
                              <span>Rank:</span>
                              <span>{topThree[0]?.rank}</span>
                            </p>
                          </div>
                        </div>
                      )}
                      {topThree.length >= 3 && (
                        <div className='bg-red-400 relative bg-opacity-90 rounded-e-2xl flex-1 w-1/3 '>
                          <img className='mask mask-circle size-20 absolute -top-10 left-1/2 -translate-x-1/2' src="https://preview.redd.it/the-shrek-menagerie-v0-252g70camryb1.jpg?width=640&crop=smart&auto=webp&s=3aeea25a14338e7e520a8fa1688be6231d159dc4" alt="" />
                          <div className="text p-7 mt-10">
                            <div className='flex justify-center'>
                              <img src={top3} alt="" className='size-20' />
                            </div>
                            <p className={`text-3xl ${topThree[2]?.username.length >= 7 ? 'text-xl' : 'text-3xl'} `}>{topThree[2]?.username}</p>
                            <p className='my-2 text-amber-300 font-bold font-mono'>
                              <span className='text-2xl'>
                                {topThree[2]?.exp_user}
                              </span>
                              <sub className='text-xs'>
                                Exp
                              </sub>
                            </p>
                            <p className='flex justify-between text-sm'>
                              <span>Rank:</span>
                              <span>{topThree[2]?.rank}</span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='h-screen fixed top-1/2 left-1/2 -translate-1/2'>
                  Loading
                </div>
              )}

              <div className='flex justify-start max-w-[80%] mx-auto'>

                <div className="join">
                  <button className="join-item btn">All Gamers</button>
                  <button className="join-item btn">FRONTED</button>
                  <button className="join-item btn">BACKEND</button>
                  <button className="join-item btn">DESIGN</button>
                </div>

                <LeaderboardTable />
              </div>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Top Alliance" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Top Typers" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
          </div>
        </div>
      </div>
    </main>
  );
}



export default LeaderBoard;
