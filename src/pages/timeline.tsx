import { type NextPage } from "next";
import { events } from "../data/events";
import { type Event } from "../data/events";
import Main from "../layout/Main";
import { useEffect, useState } from "react";

const {talks, all, musings} = events;

const Timeline: NextPage = () => {

  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);

  const [filterBy, setFilterBy] = useState<{
    talks?: boolean, all?: boolean, musing?:boolean
  }>({ talks: true, all: false, musing: false });

  useEffect(() => {
    if (filterBy.all) {
      return setDisplayedEvents(all);
    }
    if (filterBy.talks) {
      return setDisplayedEvents(talks);
    }
    if (filterBy.musing) {
      return setDisplayedEvents(musings)
    }
  }, [filterBy]);

  return (
    <Main title="Timeline">
      <div className="flex flex-row gap-3 py-4">
        <div>
          filter by:
        </div>
        <div className="flex flex-row gap-2">
        <div>
        <span className={`${filterBy.talks ? "underline underline-offset-8" : ""}  ${"cursor-pointer"}`} onClick={() => setFilterBy({ talks: true })}>
          talks
        </span>
        <span>,</span>
        </div>
        <div>
        <span className={`${filterBy.musing ? "underline underline-offset-8" : ""}  ${"cursor-pointer"}`} onClick={() => setFilterBy({musing: true})}>
          musings
        </span>
        <span>,</span>
        </div>
        <div>
        <span className={`${filterBy.all ? "underline underline-offset-8" : ""}  ${"cursor-pointer"}`} onClick={() => setFilterBy({all: true})}>
          none
        </span>
        </div>
        </div>
      </div>
      {
        displayedEvents.map((event, key) => {
          return (
            <div className="prose text-white my-6 prose-a:text-slate-300
            prose-a:underline-offset-8 prose-blockquote:text-neutral-400 py-4" key={key}>
              <p className="border-b-2 pb-1 border-slate-600 text-slate-400 font-light text-lg">{event.when.monthLong}{" "}{event.when.day},{" "}{event.when.year}</p>
              <p>{event.text}</p>
            </div>
          )
        })
      }
    </Main>
  )
}

export default Timeline;

  //