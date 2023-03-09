import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import axios from "axios";
// import { useAppDispatch } from "../../store/hooks";
// import { setActiveUser } from "../../store/slices/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const dispatch = useAppDispatch();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// axios
		// 	.post("https://hrsystem.eraasoft.com/api/login", {
		// 		password,
		// 		email,
		// 	})
		// 	.then((res) => console.log(res.data))
		// 	.catch((error) => console.log(error));

		const bodyData = {
			email,
			password,
		};
		const res = await fetch("https://hrsystem.eraasoft.com/api/login", {
			method: "POST",
			body: JSON.stringify(bodyData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(res);
		try {
			const { data, message, status } = await res.json();
			console.log(res);
			console.log(data);
		} catch (error) {
			console.log(error);
		}

		// if (status == 401) {
		// 	alert(message);
		// 	return;
		// }
		// if (data) {
		// 	console.log(data);
		// 	dispatch(setActiveUser({ token: data.token, user: data.user }));
		// 	router.push("/");
		// 	return data;
		// }
	};

	return (
		<Flex h="100vh" alignItems="center" justifyContent="center">
			<form onSubmit={(e) => handleSubmit(e)}>
				<Flex flexDir="column" rounded={6} bg="gray.200" p={12}>
					<Heading mb={6} textAlign="center" as="h3">
						Log In
					</Heading>
					<Input
						type="email"
						mb={6}
						placeholder="moutaz.ali@gmail.com"
						variant="filled"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						mb={3}
						placeholder="****************"
						variant="filled"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" colorScheme="teal">
						Login
					</Button>
				</Flex>
			</form>
		</Flex>
	);
}

export default LoginForm;
