import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const ToggleOpen = ({ toggleOpen, open }) => {
	const openRef = useRef();
	const closeRef = useRef();

	useEffect(() => {
		console.log(MorphSVGPlugin);
		console.log("open was toggled");
		if (!open) {
			console.log("int was closed");

			gsap.to(closeRef.current, {
				morphSVG: openRef.current,
				duration: 0.125,
			});
		} else {
			console.log("int was opened");

			gsap.to(closeRef.current, {
				morphSVG: closeRef.current,
				duration: 0.125,
			});
		}
	}, [open]);
	return (
		<button onClick={toggleOpen} class="dev-interface--toggleOpen">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="35"
				height="35"
				viewBox="0 0 35 35"
			>
				<path
					ref={closeRef}
					id="Icon_awesome-window-close"
					data-name="Icon awesome-window-close"
					d="M31.719,2.25H3.281A3.282,3.282,0,0,0,0,5.531V29.594a3.282,3.282,0,0,0,3.281,3.281H31.719A3.282,3.282,0,0,0,35,29.594V5.531A3.282,3.282,0,0,0,31.719,2.25ZM26,22.108A.842.842,0,0,1,26,23.3l-2.769,2.769a.842.842,0,0,1-1.189,0L17.5,21.479l-4.546,4.587a.842.842,0,0,1-1.189,0L9,23.3a.842.842,0,0,1,0-1.189l4.587-4.546L9,13.017a.842.842,0,0,1,0-1.189l2.769-2.769a.842.842,0,0,1,1.189,0L17.5,13.646l4.546-4.587a.842.842,0,0,1,1.189,0L26,11.827a.842.842,0,0,1,0,1.189l-4.587,4.546Z"
					transform={open ? "translate(0 -2.25)" : "translate(-0.563 -0.563)"}
					fill="#fff"
				/>
				<path
					ref={openRef}
					id="Icon_awesome-info-circle"
					data-name="Icon awesome-info-circle"
					d="M18.063.563a17.5,17.5,0,1,0,17.5,17.5A17.5,17.5,0,0,0,18.063.563Zm0,7.762A2.964,2.964,0,1,1,15.1,11.288,2.964,2.964,0,0,1,18.063,8.325Zm3.952,17.923a.847.847,0,0,1-.847.847h-6.21a.847.847,0,0,1-.847-.847V24.554a.847.847,0,0,1,.847-.847H15.8V19.192h-.847a.847.847,0,0,1-.847-.847V16.651a.847.847,0,0,1,.847-.847h4.516a.847.847,0,0,1,.847.847v7.056h.847a.847.847,0,0,1,.847.847Z"
					transform="translate(-0.563 -0.563)"
                    style={{ visibility: "hidden" }}

				/>
			</svg>
		</button>
	);
};

export default ToggleOpen;
