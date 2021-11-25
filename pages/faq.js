import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const Faq = () => {

    return (
        <div>
            <NavBar title="FAQ - Central Park Tours - The Official Central Park Tour Company" />

            <div className="container">
                <div className="text-left py-5 mt-5" style={{ color: '#535150' }}>
                    <h3 className="h1 pl-3 pb-3" id="faq">Frequently Asked Questions</h3>

                    <div className="content">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingOne" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="pull-right fa fa-plus pr-3"></i>How big is Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <p>Central Park is 843 acres! It spans from 59th street in Midtown all the way to 110 street in Uptown and from 5th Ave on the east all the way to Central Park West. It is a very large public park and people visiting often forget how large the park is. If you want to walk around the entire park, make sure you plan for the entire day.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTwo" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="pull-right fa fa-plus pr-3"></i>Who designed Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        <p>Who designed Central Park?
                                            The park was designed by Calvert Vaux and Frederick Olmsted. After years of debate over the exact location of this newly proposed park, construction began in 1857. The 2 architects named their plan “The Greensward Plan” and they won the park design contest. The topography of Manhattan island and the widespread Manhattan Schist, made it extremely difficult for Vaux and Olmstead. In addition, the land where Central Park is located was a rocky and swampy land. As a matter of fact, more gunpowder was used to blast the rock in Central Park, than all the gunpowder used at the Gettysburg battle.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingThree" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="pull-right fa fa-plus pr-3"></i>What to do and see in Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <p>The park has a lot to offer to people from all walks of life! From the tourist attractions in the south and the most filmed sights in the world, to the extremely secluded areas in the north. Central Park is one of the most famous bird watching places in New York State, with over 270 species of birds. For people who love to exercise, there are many hiking trails in the Ramble and the Ravine. For picnic lovers, Sheep Meadow offers a stunning view of Midtown Manhattan. Of course, motor traffic is not allowed in certain areas of the park, which makes it perfect for biking and rollerblading.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingFour" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="pull-right fa fa-plus pr-3"></i>Best way to explore the park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingFour">
                                    <div className="panel-body">
                                        <p>In our opinion, the best way to see Central Park is by renting a bike and covering the entire park. You can take advantage of our free self-guided audio tour and explore at your own pace. We also recommend not precisely following the directions and maps throughout the park. There is a great pleasure in getting lost in Central Park and discovering some new secluded places . Vaux and Olmsted were aware of the need for nature in the midst of the hustle and bustle of New York and accordingly designed many hidden spots in the park (such as the waterfall located at the north)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingFive" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><i className="pull-right fa fa-plus pr-3"></i>Where does the pedicab tour start from and can I be picked up from my hotel?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseFive" role="tabpanel" aria-labelledby="headingFive">
                                    <div className="panel-body">
                                        <p>There are 2 options available for the pedicab tour. If you are reserving the tour for a future date and you are currently not in New York, coming to our store on the day of the tour will be the most convenient option. Since we are just 2 blocks away from the entrance of the park. However, if you are already in the park and would like to take the pedicab tour, then we can send the guide directly to the park and provide you with his/her information as well as GPS coordinates. There is also an option to be picked up from your hotel. However, for that you will need to contact us with more information.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingSix" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix"><i className="pull-right fa fa-plus pr-3"></i>How hard is it to bike around the park? Are there many uphills?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseSix" role="tabpanel" aria-labelledby="headingSix">
                                    <div className="panel-body">
                                        <p>Generally speaking Central Park is easy to bike. There are only 2-3 major uphills located in the north part of the park. You don’t necessarily need to be a professional biker to make those uphills without stopping. Of course, we often walk the bikes in order to keep the group together.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingSeven" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"><i className="pull-right fa fa-plus pr-3"></i>Can you help with organizing a special event and/or picnic in Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseSeven" role="tabpanel" aria-labelledby="headingSeven">
                                    <div className="panel-body">
                                        <p>Certainly! We have partnered with nearby catering companies and we have access to some delicious and healthy food. Some special events require a permit from the Park Conservancy but that’s mostly when you require audiovisual equipment or chairs. No license is required for picnics and gatherings. We can also help with organizing special events like birthday parties, bat mitzvah and other special events in Central Park. Please contact us for more information.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingEight" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight"><i className="pull-right fa fa-plus pr-3"></i>I would like to propose to my partner on a horse and buggy ride. Do you offer any packages?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseEight" role="tabpanel" aria-labelledby="headingEight">
                                    <div className="panel-body">
                                        <p>We know that our carriage rides are one of the most romantic ways to say to someone you love them. That’s why we are there for you to make sure that everything goes as planned. We recommend that you ask the question in the late hours of the afternoon, when there are fewer tourists and distractions in the park. We offer different types of packages to suit your needs. Please contact us and we will send you our special events catalog..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingNine" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine"><i className="pull-right fa fa-plus pr-3"></i>What is the most romantic spot in Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseNine" role="tabpanel" aria-labelledby="headingNine">
                                    <div className="panel-body">
                                        <p>
                                            There are many beautiful spots in Central Park. In our opinion, Wagner Cove is on the top of the list of most romantic spots in the park. Located right next to Cherry Hill, Wagner Cover is a conveniently hidden gazebo with a stunning view of Central Park West. It is also often referred to as The Ladies’ Pavilion. This nickname comes from the fact that ladies used to change their ice skates there.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTen" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen"><i className="pull-right fa fa-plus pr-3"></i>Is the park safe at night?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseTen" role="tabpanel" aria-labelledby="headingTen">
                                    <div className="panel-body">
                                        <p>New York has been through different stages. From being one of the most dangerous cities in the 80s, it is now probably the safest big metropolitan cities in the US. Central Park also remains a very safe and peaceful place. In 2019, there were only a few reported disturbances.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingEleven" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven"><i className="pull-right fa fa-plus pr-3"></i>What time does Central Park open/close?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseEleven" role="tabpanel" aria-labelledby="headingEleven">
                                    <div className="panel-body">
                                        <p>Central Park closes at 1pm and reopens again at 5pm. Keep in mind that during those 4 hours, no one is allowed in the park. You will see a few posted signs but tourists often want to check out the park at night and disregard those signs. Please try not to access the park during those hours. The police and park rangers could give you a ticket or if you are lucky just a verbal warning.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTwelve" role="tab">
                                    <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve"><i className="pull-right fa fa-plus pr-3"></i>Do you need a permit to shoot in Central Park?</a></h4>
                                </div>
                                <div className="panel-collapse collapse" id="collapseTwelve" role="tabpanel" aria-labelledby="headingTwelve">
                                    <div className="panel-body">
                                        <p>Visitors are free to film and take pictures in Central Park with any handheld equipment and there is no need for obtaining a license. However, if you are bringing equipment and/or would like to inquire about specific locations, you will need to contact the Central Park Conservancy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
export default Faq;