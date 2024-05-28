import { Avatar, Dropdown } from 'flowbite-react';

export default function UserAvatar() {
    return (
        <Dropdown
            label={<Avatar
                img={(props) => (
                    <img
                        alt=""
                        referrerPolicy="no-referrer"
                        src="/images/avatar.png"
                        height="64"
                        width="64"
                        {...props}
                    />
                )}
            />}
            arrowIcon={false}
            className='bg-amber-800 py-4 px-5 rounded-2xl shadow-inner shadow-amber-500 mr-10'
        >
            <div className='mr-10' style={{left: '-15px;'}}>
                <Dropdown.Header>
                    <span className="block text-sm">Ahmad Ahmedov</span>
                    <span className="block truncate text-sm font-medium">Ahmedov@Ahmad.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
            </div>
        </Dropdown>
    );
}
