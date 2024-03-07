import React from 'react'
import logo from '../assets/img-home/logo.png'
import teamMeeting1 from '../assets/img-home/team-meeting-1.jpg'
import teamMeeting2 from '../assets/img-home/team-meeting-2.jpg'
import teamMeeting3 from '../assets/img-home/team-meeting-3.jpg'
import teamMeeting4 from '../assets/img-home/team-meeting-4.jpg'
import teamMeeting5 from '../assets/img-home/team-meeting-5.jpg'
import teamMeeting6 from '../assets/img-home/team-meeting-6.webp'
import teamMeeting7 from '../assets/img-home/team-meeting-7.webp'
import teamMeeting8 from '../assets/img-home/team-meeting-8.webp'
import teamMeeting9 from '../assets/img-home/team-meeting-9.jpg'


const Home = () => {
    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-end">
                <div className="w-1/6 m-3">
                    <img src={logo} alt="logo" className="img-fluid rounded-xl" />
                </div>
            </div>
            <h1 className='text-3xl md:text-4xl text-nav text-center mx-3 my-5 underline'>Every Meeting</h1>
            <p className='text-md md:text-xl text-nav text-center mx-3 my-5'>Voici l'application qui permet de gérer ses projets et ses réunions en totale collaboration.</p>
            <div className="w-full flex justify-center">
                <img src={teamMeeting1} alt="équipe de travail" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <h2 className='text-2xl md:text-3xl text-sun text-center mx-3 my-5'>Ensemble nous pouvons tout faire!</h2>
                <p className='text-md md:text-xl text-sun text-center mx-3 my-5'>Bienvenue sur l'application qui permet de gérer sa collaboration en équipe, sa gestion du temps et sa plannification de réunion.</p>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting2} alt="présentation de travail" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className='text-md md:text-xl text-sun text-center mx-3 my-5'>Profitez vous avez un salon de Chat, une ToDo Liste, une création de planning, un tableau Kanban et une gestion de sprint Scrum Gratuite.</p>
            </div>
            <div className="flex justify-center my-5">
                <button className='text-xl text-white bg-sun hover:bg-green-200 hover:text-sun p-3 rounded-full'>Inscription</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting3} alt="brainstorming" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className='text-md md:text-xl text-sun text-center mx-3 my-5'>Voici tout ce que vous avez à votre disposition. Une fois inscrit accédez à votre tableau de bord et commencez à gérer, plannifier et collaborer efficacement.</p>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-sun hover:bg-yellow-300 hover:text-sun p-3 rounded-full'>Tableau de bord</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting4} alt="travail collectif" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className='text-md md:text-xl text-king text-center mx-3 my-5'>Vous avez une start up, une entreprise ou tous autres types de structures possédant plusieurs équipes qui doivent collaborer ensemble? Voici l'option payante avec tous ce qu'il faut pour coordonner, superviser et orchestrer de multiples équipes!</p>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-king hover:bg-red-200 hover:text-king p-3 rounded-full'>Gestion d'équipes</button>
            </div>
            <div>
                <p className='text-md md:text-xl text-nav text-center mx-3 my-5'>Vous débutez et vous ne savez pas par ou commencer? voici chaque section accompagnée par une description de la méthode et d'un petit tutoriel de prise en main rapide. Profitez en c'est cadeau! Vous allez devenir un expert en gestion de projet!</p>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting5} alt="travail collaboratif" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className="text-md md:text-xl text-center m-3 text-nav underline">Communication en temps réel :</p>
                <ol>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- mettez vous dans un channel de discussion.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- communiquez, échangez des fichiers et des liens.</li>
                </ol>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>Chat</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting6} alt="reflexion en groupe" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className="text-md md:text-xl text-center m-3 text-nav underline">Liste des tâches :</p>
                <ol>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- définissez les tâches à faire.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- définissez une échéance, une priorité, une difficulté et l'avancement de chacunes de ces tâches.</li>
                </ol>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>ToDo liste</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting7} alt="présentation" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className="text-md md:text-xl text-center m-3 text-nav underline">Calendrier :</p>
                <ol>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- définissez la date de la réunion.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- invitez vos collaborateurs.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- mettez en pièces jointes les documents nécessaires à la préparation de cette réunion.</li>
                </ol>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>Planning</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting8} alt="discussion de groupe" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className="text-md md:text-xl text-center m-3 text-nav underline">Gestion en mode Agile Kanban :</p>
                <ol>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- définissez des "tickets" que vous devez réaliser.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- organisez vos tickets en colonnes.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- déplacez vos tickets suivant leurs avancement.</li>
                </ol>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>Kanban</button>
            </div>
            <div className="w-full flex justify-center">
                <img src={teamMeeting9} alt="rituel scrum" className="w-1/2 img-fluid rounded-xl" />
            </div>
            <div>
                <p className="text-md md:text-xl text-center m-3 text-nav underline">Gestion en mode Agile Scrum :</p>
                <ol>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- définissez des "sprints" que vous devez accomplir en quelques semaines.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- ajustez votre "backlog" suivant les tâches que vous devez réaliser dans le temps impartit.</li>
                    <li className="text-md md:text-xl text-center m-3 text-nav">- organisez des "rituels scrum" pour suivre l'avancement du projet.</li>
                </ol>
            </div>
            <div className="flex justify-center my-3">
                <button className='text-xl text-white bg-nav hover:bg-blue-200 hover:text-nav p-3 rounded-full'>Scrum</button>
            </div>
        </div>
    )
}

export default Home