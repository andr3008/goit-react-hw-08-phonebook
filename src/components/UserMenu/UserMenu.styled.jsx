import styled from "@emotion/styled";

export const Div = styled.div`
	display: flex;
	align-items: center;
`;
export const Span = styled.span`
	margin-right: 12px;
`;
export const Button = styled.button`
	padding: 5px;
	margin: 7px 0;
	border: none;
	outline: none;
	border-radius: 6px;
	background-color: rgb(57, 133, 168);
	color: #fff;
	cursor: pointer;
	text-transform: capitalize;
	box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
		background-color: rgb(129, 214, 164);
		color: white;
	}
`;
