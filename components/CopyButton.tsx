'use client';

import {FC} from 'react'
import { Button } from './ui/button'
import { ClipboardEdit } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"


interface CopyButtonProps{
    drinkId : string
}

const CopyButton: FC<CopyButtonProps> = ({drinkId}) => {
    const { toast } = useToast()
    const pathname = usePathname()
    const textToCopy = `${pathname}/${drinkId}`


    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            toast({
                title:'Link copied to clipboard',
                description: `${textToCopy}`
            })
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      };

   return <>
    <Button variant={'secondary'} onClick={copyToClipboard}>
    <ClipboardEdit/>
    </Button>
   </>
}

export default CopyButton