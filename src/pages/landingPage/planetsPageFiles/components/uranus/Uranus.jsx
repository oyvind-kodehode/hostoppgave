import React from "react";
import URANUS from "../../../../../assets/images/uranus.png";
import * as s from "../../style";

const Uranus = () => {
	return (
		<>
			<s.Section id="uranus">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={URANUS} alt="uranus" />

						<s.Api_Info_Absolute>Api Info</s.Api_Info_Absolute>
						<s.Angled_Line />
					</s.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>URANUS</s.Planet_Name>
						<s.Info_Headline>Uranus is more stormy than we thought.</s.Info_Headline>
						<s.Info_Text>
							<p>
								When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly featureless blue ball and some
								assumed there wasn't much activity going on on Uranus.
							</p>
							<p>
								We've had a better look at the data since then that does show some interesting movement in the southern
								hemisphere.
							</p>
							<p>
								Additionally, the planet drew closer to the Sun in 2007, and in more recent years telescope probing has shown
								some storms going on.
							</p>
							<br />
							<p>What is causing all this activity is difficult to say unless we were to send another probe that way.</p>
							<p>
								And unfortunately, there are no missions yet that are slated for sure to zoom out to that part of the Solar
								System.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Uranus;
