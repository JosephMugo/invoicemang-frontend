import './UserDashboardSection.css';

const UserDashboardSection = ({username, position, setPage}) => {
    setPage('USER_VIEW');
    return (
        <div className="usersection-container">
            <h2 className="text-white">User Dashboard</h2>
            <div className="card mt-4 p-4">
                <i id="usericon" class="fa fa-user" aria-hidden="true"></i>
                <h5 className="mt-3">{username}</h5>
                <p className="mt-1">{position}</p>
            </div>
        </div>
    );
}
 
export default UserDashboardSection;