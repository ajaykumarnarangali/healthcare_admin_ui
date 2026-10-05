import { Outlet } from 'react-router-dom';
import HospitalAdminSidebar from '../components/HospitalAdminSidebar';

function HospitalAdminLayout() {
    return (
        <div>
            <div>
                <div>
                    <HospitalAdminSidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HospitalAdminLayout;