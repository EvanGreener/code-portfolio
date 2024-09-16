import addBird from '../../public/bb/add-bird.png'
import birdpediaEntry from '../../public/bb/birdpedia-entry.png'
import birdpedia from '../../public/bb/birdpedia.png'
import home from '../../public/bb/home.png'
import leaderboard from '../../public/bb/leaderboard.png'

import account from '../../public/tw/account.png'
import loginEmail from '../../public/tw/login-email.png'
import login from '../../public/tw/login.png'
import tripCalendar from '../../public/tw/trip-calendar.png'
import tripPlanner from '../../public/tw/trip-planner.png'
import { StaticImageData } from 'next/image'

const projects: {
   title: string
   desc: string
   github: string
   tags: string[]
   imgSrcs?: StaticImageData[]
   ref?: string
}[] = [
   {
      title: 'Backyard buddiez (solo project)',
      desc: `A bird tracking app/game for everyone! Made with Next.js and Supabase. Use an app like Merlin to 
       identify a bird you've spotted, then enter the name of the bird you've IDd and the app will automatically a
       dd your sighting. The app will let you know if your Birdpedia gained a new entry! 
       Look back on all the previous birds you've IDd. Click on one get information and various statistics on it!
       By identifying birds and completing the daily challenges, you earn points. You get 500 points for each new 
       bird you ID and 100 points for every daily challenge you complete. See how you stack up against your friends and the world!
       When you ID a bird, if your sighting fit one or more of the daily challenges you can check off those challenges 
       before adding your sighting! Your daily challenge progress will updated and shown on the home screen!`,
      github: 'https://github.com/EvanGreener/backyard-buddiez',
      tags: [
         'Next.js',
         'Supabase',
         'PostgreSQL',
         'drizzle-orm',
         'React',
         'SPARQL',
      ],
      imgSrcs: [home, leaderboard, addBird, birdpedia, birdpediaEntry],
      ref: 'https://backyard-buddiez.vercel.app/',
   },
   {
      title: 'TripWise',
      desc: `A web and mobile application that recommends activities and 
       restaurants based on your interests. Once the app generates the recommended
       restaurants/activites, the app displays a calendar which shows when to go to
       each activity. The user can also click on any entry in the calendar to open
       Google Maps to see the location. Before the app generates recommendations,
       the app accesses your Google calandar (if you signed in with Google) to
       ensure that the generated activities don't conflict with other 
       appointments/events`,
      github: 'https://github.com/mattmazzone/engr-490',
      tags: ['React Native', 'Expo', 'Firebase', 'Python', 'Google APIs'],
      imgSrcs: [login, loginEmail, tripPlanner, tripCalendar, account],
   },
]

export default projects
