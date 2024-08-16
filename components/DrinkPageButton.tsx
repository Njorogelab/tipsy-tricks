import { ExternalLink } from 'lucide-react'
import {FC} from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

interface DrinkPageButtonProps{
drinkId : string
}

const DrinkPageButton: FC<DrinkPageButtonProps> = ({drinkId}) => {
    

   return <>
   
   
   <Button variant={'secondary'}><Link href={`/drink/${drinkId}`}><ExternalLink/></Link></Button>
   </>
}

export default DrinkPageButton