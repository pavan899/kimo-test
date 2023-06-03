
// Initialization for ES Users
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";

export default function Accordion() {
    const data = [
        {
          "name": "Adventure",
          "activities": [
            {
              "title": "Surfing in the waves of Waikiki"
            },
            {
              "title": "Hiking the Diamond Head trail in Oahu"
            },
            {
              "title": "Exploring Hawaii Volcanoes National Park"
            },
            {
              "title": "Snorkeling at the beaches of Maui"
            },
            {
              "title": "Taking a helicopter tour to see the active volcanoes and waterfalls"
            }
          ]
        },
        {
          "name": "Culinary",
          "activities": [
            {
              "title": "Taking a Hawaiian cooking class"
            },
            {
              "title": "Trying Poke at a local restaurant"
            },
            {
              "title": "Going on a coffee tasting tour in the Big Island"
            },
            {
              "title": "Attending a Hawaiian luau dinner show"
            },
            {
              "title": "Visiting a local market to taste exotic fruits and other local products"
            }
          ]
        },
        {
          "name": "Eco-tourism",
          "activities": [
            {
              "title": "Hiking in the lush forests of the Big Island"
            },
            {
              "title": "Kayaking through the mangroves of Maui"
            },
            {
              "title": "Whale watching during the winter months"
            },
            {
              "title": "Snorkeling with sea turtles at the Turtle Bay on Oahu"
            },
            {
              "title": "Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall"
            }
          ]
        },
        {
          "name": "Family",
          "activities": [
            {
              "title": "Visiting the Waikiki Aquarium in Oahu"
            },
            {
              "title": "Going on a scenic drive to see the Road to Hana on Maui"
            },
            {
              "title": "Exploring the Polynesian Cultural Center on Oahu"
            },
            {
              "title": "Taking a sunset dinner cruise along the coast of Maui"
            },
            {
              "title": "Attending a hula show or a Hawaiian music concert as a family"
            }
          ]
        },
        {
          "name": "Sport",
          "activities": [
            {
              "title": "Playing golf on one of Hawaii's world-famous courses"
            },
            {
              "title": "Going on a deep-sea fishing excursion"
            },
            {
              "title": "Participating in a beach volleyball game on Waikiki Beach"
            },
            {
              "title": "Hiking the challenging trails of the Koko Head Crater on Oahu"
            },
            {
              "title": "Surfing lessons on the North Shore of Oahu"
            }
          ]
        }
      ];
    const [active, setActive] = useState(null);
  const handleToggle = (index: any) => {
    active === index ? setActive(null) : setActive(index);
  };
    return <div className='flex flex-col gap-2 relative top-0 md:top-0 md:mb-0'>
    {data.map((item, index) => {
      return (
        <div key={index} className='my-0 p-5 w-full rounded-lg md:w-full bg-white'>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-3'>
              <p
                className={
                  active === index
                    ? "text-darkBlue text-sm font-bold cursor-pointer capitalize"
                    : "text-DarkGrayishBlue text-sm cursor-pointer capitalize"
                }
                onClick={() => handleToggle(index)}>
                {item.name}
              </p>

              <ArrowForward
                onClick={() => handleToggle(index)}
                className={
                  active === index
                    ? "cursor-pointer text-md rotate-[90deg] text-[#008080]"
                    : "cursor-pointer text-md text-[#008080]"
                }
              />
            </div>
          </div>
              <div
                  onClick={() => handleToggle(index)}
                  className={
                      active === index
                          ? "text-DarkGrayishBlue text-xs leading-relaxed w-[15rem] md:w-[20rem] p-0 m-0 cursor-pointer"
                          : "invisible max-h-0"
                  }>
                  <ul className="list-disc p-4">
                      {
                          item.activities.map((activity, i) => {
                              return <li className="list-outside" key={i}>{activity.title}</li>;
                          })
                      }
                  </ul>
              </div>
        </div>
      );
    })}
  </div>
}