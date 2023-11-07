export default function Auth({ user, onSignInClick, onSignOutClick }) {
	return (
		<section>
			{user ? (<button onClick={onSignOutClick} className="bg-[#1B5299] p-3 rounded m-2">Sign Out</button>) : (<button onClick={onSignInClick} className="bg-[#1B5299] p-3 rounded m-2">Sign In</button>)}
		</section>
	)
}