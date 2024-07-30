import React from "react";
import "./project_d.css";
import { Link } from "react-router-dom";

const Project_d = () => {
  return (
    <div className="project_d_main_cont">
      <div className="project_d_card_Cont">
        <div className="project_image_d donut ig"></div>
        <div className="project_d_heading"> THE DONUT</div>
        <div className="project_d_overvieww">
          2 January, 1994. The day when the great software Blender launched, it
          was decided that every new blender user would have to start with the
          legendary DONUT tutorial, but unfortunately the Founder of the Donut
          tutorial wasn’t agreeing with that and later he launched it on 2018.
          But the legacy didn’t break. Till date the new comers first start with
          the Donut.
        </div>

        <Link className="link_to_in_project" to="/project/donut">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d ig sword"></div>
        <div className="project_d_heading"> THE SWORD</div>
        <div className="project_d_overvieww">
          Back then, A Brutal war had happened between two clan. On the right,
          there was a cruel warrior who had claimed almost the whole world but
          then he met the great King who was known for his victorius wars, the
          greatest thing of him was he never killed his opponents to give them a
          chance to re-establish their life. The king fought against the cruel,
          and kept his legacy intact, the war was so brutal that he gave up his
          sword and decided he would never persevere it again.
        </div>

        <Link className="link_to_in_project" to="/project/sword">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d ig usualHour"></div>
        <div className="project_d_heading"> USUAL HOUR</div>
        <div className="project_d_overvieww">
          Cartoon style scene representing the rush in todays life, where most
          of the people is in a hurry and wants to do everything in a minute but
          they always forget good things take time. If you are also the one
          mentioned above, then stop and take a breath and appreciate atleast
          you are doing it.
        </div>

        <Link className="link_to_in_project" to="/project/usual">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d  ig spiritRecarnation"></div>
        <div className="project_d_heading"> SPIRIT’S RECARNATION</div>
        <div className="project_d_overvieww">
          The Hindu scriptures tell us about the recarnation of a spirit to
          perform their Karma on the Dhartiloka (EARTH). Similarly the render
          shows that every soul/spirit has to take birth on the earth as the
          soul never dies. As a creative liberty I have added a door which
          connects the earth and the soul has to go through that to take birth.
        </div>

        <Link className="link_to_in_project" to="/project/sprit">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d ig skull"></div>
        <div className="project_d_heading"> ABANDONED SKULL</div>
        <div className="project_d_overvieww">
          Millions of Years ago, the size of the humans were much bigger than
          today’s but as the time passed it became smaller. Now in 2024 we
          founded one of the skull of our ancestors who had lived on this
          abandoned island but the shocking thing of this is that till date
          whoever saw this skull had died An abandoned skull
        </div>

        <Link className="link_to_in_project" to="/project/skull">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d ig dount"></div>
        <div className="project_d_heading"> THE DONUT</div>
        <div className="project_d_overvieww">
          2 January, 1994. The day when the great software Blender launched, it
          was decided that every new blender user would have to start with the
          legendary DONUT tutorial, but unfortunately the Founder of the Donut
          tutorial wasn’t agreeing with that and later he launched it on 2018.
          But the legacy didn’t break. Till date the new comers first start with
          the Donut.
        </div>

        <Link className="link_to_in_project" to="/project/donut">
          <button className="button_from_project_d">More</button>
        </Link>
        <br />
      </div>

      <div className="project_d_card_Cont">
        <div className="project_image_d"></div>
        <div className="project_d_heading"> DORAEMON BUTTON</div>
        <div className="project_d_overvieww">
          YOUR ONE STEP SOLUTION
          <br />
          Just breath and feel the nostalgia with The Cartoon model of Doraemon
        </div>
        <button className="button_from_project_d">View On Instagram</button>
        <br />
      </div>
    </div>
  );
};

export default Project_d;
