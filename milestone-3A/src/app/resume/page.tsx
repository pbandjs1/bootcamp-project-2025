/* eslint-disable react/no-unescaped-entities */
import style from "./resume.module.css"

export default function Resume() {
  return (
    <main>
        <h1 className={style.pageTitle} >
            <strong>resume</strong>
        </h1>
        <div className={style.resume} >
            <section className={style.section} >
                <h2 className={style.sectionTitle} >
                    Education
                </h2>
                <p>
                    Henry M. Jackson Highschool
                </p>
                <p>
                    California State Polytechnic University - San Luis Obispo
                </p>
            </section>
            <section className={style.section} >
                <h2 className={style.sectionTitle} >
                    Coursework
                </h2>
                <p>
                    Data Structures, Project-Based Object-Orientated Programming 
                </p>
            </section>
            <section className={style.section} >
                <h2 className={style.sectionTitle} >
                    Skills
                </h2>
                <ul className={style.skillList}>
                    <li>Java - 4 years</li>
                    <li>Excel - 3 years</li>
                    <li>Tableau - 3 years</li>
                    <li>JS/TS - 1 year</li>
                </ul>
            </section>
            <section className={style.section} >
                <h2 className={style.sectionTitle} >
                    Projects
                </h2>
                <p><strong>Personal Website</strong></p>
                <p>A website designed to share information about me to a viewer.</p>
            </section>
            <section className={style.section} >
                <h2 className={style.sectionTitle} >
                    Experience
                </h2>
                <div className={style.job} >
                    <p><strong>YOUTH DEVELOPMENT PROFESSIONAL</strong> (July 2023 - August 2025)</p>
                    <p><strong>Boys & Girls Club of America</strong>, Everett, WA</p>
                    <ul className={style.roles} >
                        <li>Participated in activities with underprivileged kids aged 6-13, ensuring safe play and modeling appropriate behavior.</li>
                        <li>Monitored interactions between youth to ensure a fun, safe, and inclusive environment.</li>
                        <li>Created programs and scheduled activities.</li>
                        <li>Led activities such as arts & crafts, gym games, and STEM learning projects.</li>
                    </ul>
                </div>
                <div className={style.job} >
                    <p><strong>SCOUTING LEAD</strong> (September 2022 - May 2025)</p>
                    <p><strong>FRC Team 2910</strong>, Everett, WA</p>
                    <ul className={style.roles} >
                        <li>Managed a group of 10-20 Scouts to collect quantitative and qualitative data on other robots.</li>
                        <li>Utilized Excel to store data, designed graphs in Tableau, and wrote JS programs to access data from APIs.</li>
                        <li>Introduced systems in data collection, management, and visualization for the purposes of data-driven strategy.</li>
                    </ul>
                </div>
                <div className={style.job} >
                    <p><strong>SCOUTING APP LEAD</strong> (September 2024 - May 2025)</p>
                    <p><strong>FRC Team 2910</strong>, Everett, WA</p>
                    <ul className={style.roles} >
                        <li>Led a small group of developers in designing and building a scouting app</li>
                        <li>Acted as a main contributor to the app.</li>
                        <li>Ensured our product was completed under the 8 week deadline.</li>
                        <li>Listened to user-input and edited the app to fit user needs.</li>
                    </ul>
                </div>
            </section>
        </div>
         <div className="images/NICK_ENDRESEN_RESUME.pdf" >
                <p>Download Resume</p>
        </div>
    </main>
  );
}
