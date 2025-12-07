/* eslint-disable react/no-unescaped-entities */
import style from "./page.module.css"
import './globals.css';

export default function Home() {
  return (
    <main>
        <header className={style.pageTitle}>
            <strong>Nick Endresen</strong>
        </header>
        <div className={style.about}>
            <div className={style.aboutImage}>
                <img src="IMG_0480.jpg" alt="Picture of Nick Endresen"/>
            </div>
            <div className={style.aboutText}>
                <p className={style.aboutTextP}>
                    Hi! I'm <strong>Nick Endresen</strong>, a First Year CS Major who is interested in making a
                    difference in my community. For all four years of highschool, I was an active member of my school's
                    FRC Robotics Team, <strong>FRC Team 2910: <a href="https://github.com/frcteam2910"></a>Jack in the
                        Bot</strong>.
                </p>
                <p className={style.aboutTextP}>
                    On the team, I occupied a number of roles. Programmer Level 2, Scouting Lead, and Scouting App Lead.
                    Altogether, its meant that I've obtained experience programming robots in Java, utilizing leadership
                    skills to lead a group of scouts in data collection, managing and analyzing data for data-driven
                    strategy with the use of Excel and Tableau, and -- most significant to me -- leading development on
                    a React Native Scouting App built in TypeScript (unfortunately, its final version is not the one
                    linked on my github page. It currently lives in a private repo in the FRC Team 2910 organization).
                </p>
                <p className={style.aboutTextP}>
                    Outside of Robotics, I supported my local community by working as a Youth Development Professional
                    for the Cascade Location of the <strong>Boys & Girls Club</strong>.
                </p>
            </div>
        </div>
    </main>
  );
}
