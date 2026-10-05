import { Outlet } from 'react-router-dom';
import HospitalAdminHeader from '../components/HospitalAdminHeader';
import HospitalAdminSidebar from '../components/HospitalAdminSidebar';

function HospitalAdminLayout() {
    return (
        <div>
            <HospitalAdminHeader />
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