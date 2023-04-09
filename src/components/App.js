const App = () => {
	const [users, setUsers] = useState([]);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>{
			return response.json();
		})
		.then((result)=>{
			// console.log(result)
			setUsers(result);
		})
		.catch((err)=>{
			console.error(err);
		})
	},[])
	return (
		<div id="main">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map((user)=>(
							<tr key={user.id}>
								<UserTable user={user} />
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export default App;
