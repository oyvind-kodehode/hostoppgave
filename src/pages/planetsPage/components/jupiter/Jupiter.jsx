import React from "react";
import JUPITER from "../../../../assets/images/jupiter.png";
import * as s from "../../style";

const Jupiter = () => {
	return (
		<>
			<s.Section id="jupiter">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={JUPITER} alt="jupiter" />

						<s.Api_Info_Absolute>Api Info</s.Api_Info_Absolute>
						<s.Angled_Line />
					</s.Planet>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>JUPITER</s.Planet_Name>
						<s.Info_Headline>Jupiter is a great comet catcher.</s.Info_Headline>
						<s.Info_Text>
							<p>
								The most massive planet in the Solar System probably had a huge
								influence on its history.
							</p>
							<br />
							<p>
								At 318 times the mass of Earth, you can imagine that any passing
								asteroid or comet going near Jupiter has a big chance of being
								caught or diverted.
							</p>
							<br />
							<p>
								Maybe Jupiter was partly to blame for the great bombardment of small
								bodies that peppered our young Solar System early in its history,
								causing scars you can still see on the Moon today.
							</p>
							<br />
							<p>
								And in 1994, astronomers worldwide were treated to a rare sight: a
								comet, Shoemaker-Levy 9, breaking up under Jupiter's gravity and
								slamming into the atmosphere.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Jupiter;
