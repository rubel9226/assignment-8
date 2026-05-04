'use client'
import { UpdateUserModal } from '@/Components/UpdateUserModal';
import { authClient } from '@/lib/auth.client';
import { Card } from '@heroui/react';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
    const router = useRouter();
    const userData = authClient.useSession()
    const user = userData?.data?.user;


    const isLoading = userData?.isPending;

    useEffect(() => {
        if (isLoading) return;
        
        if(!user){
            router.push('/login');
        }
    }, [user, isLoading, router]);

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-4'>
                <Avatar className="cursor-pointer select-none h-20 w-20">
                    <Avatar.Image
                        size='sm' 
                        alt={user?.name} 
                        src={user?.image}
                        referrerPolicy="no-referrer"  
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default ProfilePage;