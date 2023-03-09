import {
	Flex,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Stack,
	Button,
	Icon,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { RiGitBranchFill } from "react-icons/ri";
import { FcDepartment } from "react-icons/fc";
import { ImUserTie } from "react-icons/im";
import Link from "next/link";
function Navbar() {
	return (
		<Flex as="nav" flexDir="column" justifyContent="center" alignItems="center">
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Icon as={FaHome} aria-label="dashboard" color="teal" />
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Dashboard
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Link href="/">
							<Button colorScheme="teal" size="sm" w="100%">
								<Text textAlign="center" colorScheme="gray">
									Home
								</Text>
							</Button>
						</Link>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Icon aria-label="branches" as={RiGitBranchFill} color="teal" />
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Branches
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Stack direction="column" spacing={4}>
							<Button colorScheme="teal" size="sm">
								<Link href="/branches">
									<Text textAlign="center" colorScheme="gray">
										Branches List
									</Text>
								</Link>
							</Button>
							<Button colorScheme="teal" size="sm">
								<Link href="/branches/add-branch">
									<Text textAlign="center" colorScheme="gray">
										Add New Branch
									</Text>
								</Link>
							</Button>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Icon aria-label="departments" as={FcDepartment} color="teal" />
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Departments
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Stack direction="column" spacing={4}>
							<Button colorScheme="teal" size="sm">
								<Link href="/departments">
									<Text textAlign="center" colorScheme="gray">
										Departments List
									</Text>
								</Link>
							</Button>
							<Button colorScheme="teal" size="sm">
								<Link href="/departments/add-department">
									<Text textAlign="center" colorScheme="gray">
										Add New Department
									</Text>
								</Link>
							</Button>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Icon aria-label="employees" as={ImUserTie} color="teal" />
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Employees
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Stack direction="column" spacing={4}>
							<Button colorScheme="teal" size="sm">
								<Link href="/employees">
									<Text textAlign="center" colorScheme="gray">
										Employees List
									</Text>
								</Link>
							</Button>
							<Button colorScheme="teal" size="sm">
								<Link href="/employees/add-employee">
									<Text textAlign="center" colorScheme="gray">
										Add New Employee
									</Text>
								</Link>
							</Button>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	);
}

export default Navbar;
