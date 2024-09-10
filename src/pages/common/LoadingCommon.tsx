import { CommandDialog } from '@/components/ui/command';

export default function LoadingCommon() {
    return (
        <div>
            sdgsdgdssdsdgsd
            <CommandDialog open={true}>
                <div className='h-[239px] flex justify-center content-center bg-[#ffffff]'>
                    <div className='h-[100%] flex justify-center content-center flex-col'>
                        <div className='text-[#000000] text-[25px] text-center'>Creating a ta222ble...</div>
                        <div className='text-[#000000] text-[16px] text-center'>It may take a couple of moments</div>
                    </div>
                </div>
            </CommandDialog>
        </div>
    )
}
