import { useState } from "react"


const WeatherIcon = ({data: icon}) => {


    console.log(icon)

    function getIcon () {


        switch(icon){
            case '01d': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
                )
            }
            case '01n': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.948 16.17-36.117 36.117-36.117 19.947 0 36.117 16.169 36.117 36.117" fill="#3b3c40"></path></svg>
                )
            }
            case '02d': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M121.66 68.27c0 14.186-11.5 25.687-25.687 25.687-14.187 0-25.687-11.5-25.687-25.688 0-14.186 11.5-25.687 25.687-25.687 14.187 0 25.688 11.5 25.688 25.687" fill="#f15d46"></path><path d="M42.82 72.456c.76 0 1.505.07 2.24.17a18.256 18.256 0 01-.41-3.833c0-10.112 8.2-18.31 18.313-18.31 9.838 0 17.842 7.765 18.269 17.5a10.938 10.938 0 017.366-2.853c6.067 0 10.987 4.922 10.987 10.989 0 1.383-.267 2.7-.731 3.918a12.966 12.966 0 012.561-.255c7.081 0 12.82 5.738 12.82 12.817 0 7.078-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.484 0-9.1 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>
                )
            }
            case '02n': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M121.66 68.27c0 14.186-11.5 25.688-25.687 25.688-14.187 0-25.687-11.502-25.687-25.688 0-14.185 11.5-25.687 25.687-25.687 14.187 0 25.688 11.502 25.688 25.687" fill="#3b3c40"></path><path d="M42.82 72.458c.76 0 1.505.068 2.24.168a18.249 18.249 0 01-.41-3.832c0-10.112 8.2-18.312 18.313-18.312 9.838 0 17.842 7.767 18.269 17.502a10.939 10.939 0 017.366-2.853c6.067 0 10.987 4.92 10.987 10.99 0 1.382-.267 2.698-.731 3.918a13.007 13.007 0 012.561-.256c7.081 0 12.82 5.737 12.82 12.815 0 7.083-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.478 0-9.104 7.377-16.482 16.48-16.482" fill="#efefed"></path></svg>
                )
            }
            case '03d': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M46.533 68.506c.762 0 1.507.07 2.24.17a18.34 18.34 0 01-.409-3.834c0-10.112 8.198-18.31 18.313-18.31 9.838 0 17.843 7.765 18.269 17.5a10.935 10.935 0 017.367-2.852c6.067 0 10.986 4.922 10.986 10.989 0 1.382-.267 2.7-.734 3.918a13.1 13.1 0 012.565-.256c7.08 0 12.818 5.74 12.818 12.817 0 7.08-5.738 12.82-12.818 12.82H46.533c-9.103 0-16.481-7.38-16.481-16.482 0-9.101 7.378-16.48 16.481-16.48" fill="#efefed"></path></svg>
                )
            }
            case '03n': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M46.533 68.506c.762 0 1.507.07 2.24.17a18.34 18.34 0 01-.409-3.834c0-10.112 8.198-18.31 18.313-18.31 9.838 0 17.843 7.765 18.269 17.5a10.935 10.935 0 017.367-2.852c6.067 0 10.986 4.922 10.986 10.989 0 1.382-.267 2.7-.734 3.918a13.1 13.1 0 012.565-.256c7.08 0 12.818 5.74 12.818 12.817 0 7.08-5.738 12.82-12.818 12.82H46.533c-9.103 0-16.481-7.38-16.481-16.482 0-9.101 7.378-16.48 16.481-16.48" fill="#efefed"></path></svg>
                )
            }
            case '04d': {
                return(
                    <svg viewBox="20 20 110 110" ><path d="M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892" fill="#3b3c40"></path><path d="M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>
                )
            }
            case '04n': {
                return(
                    <svg viewBox="20 20 110 110" ><path d="M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892" fill="#3b3c40"></path><path d="M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>
                )
            }
            case '09d': {
                return(
                    <div>Shower rain</div>
                )
            }
            case '10d': {
                return(
                    <svg viewBox="20 20 110 110" ><path d="M112.411 57.87c0 11.433-9.27 20.702-20.7 20.702-11.435 0-20.702-9.27-20.702-20.702 0-11.433 9.267-20.701 20.702-20.701 11.43 0 20.7 9.268 20.7 20.701" fill="#f15d46"></path><path d="M48.874 61.244c.612 0 1.21.055 1.805.137a14.679 14.679 0 01-.332-3.087c0-8.152 6.607-14.759 14.759-14.759 7.93 0 14.38 6.26 14.725 14.104a8.81 8.81 0 015.936-2.298 8.854 8.854 0 018.854 8.856 8.772 8.772 0 01-.59 3.157 10.425 10.425 0 012.065-.207c5.707 0 10.331 4.625 10.331 10.33 0 5.706-4.624 10.331-10.33 10.331H48.873c-7.335 0-13.285-5.948-13.285-13.282s5.95-13.282 13.285-13.282" fill="#efefed"></path><path d="M83.052 95.131l.423-1.13a2.172 2.172 0 10-4.069-1.523l-.422 1.132a2.172 2.172 0 104.068 1.521M77.548 109.845l1.483-3.962a1.517 1.517 0 00-.89-1.953l-1.226-.46a1.517 1.517 0 00-1.951.89l-1.483 3.965a1.515 1.515 0 00.889 1.951l1.226.459a1.514 1.514 0 001.952-.89M68.555 100.83l1.781-4.766a1.516 1.516 0 00-.89-1.953l-1.226-.458a1.515 1.515 0 00-1.952.89l-1.781 4.765a1.516 1.516 0 00.889 1.952l1.227.46a1.517 1.517 0 001.952-.89M65.864 108.023l.272-.73a2.173 2.173 0 00-4.068-1.523l-.274.732a2.172 2.172 0 004.07 1.521M60.885 89.073l.724-1.935a2.17 2.17 0 10-4.068-1.52l-.723 1.934a2.173 2.173 0 104.068 1.52M55.884 102.45l1.781-4.763a1.517 1.517 0 00-.889-1.955l-1.227-.458a1.519 1.519 0 00-1.953.89l-1.78 4.765a1.516 1.516 0 00.89 1.952l1.224.46a1.519 1.519 0 001.954-.89" fill="#3b3c40"></path></svg>
                )
            }
            case '11d': {
                return(
                    <div>Thunderstorm</div>
                )
            }
            case '13d': {
                return(
                    <svg viewBox="20 20 110 110"><g fill="#3b3c40"><path d="M78.009 76.286l-4.01 2.315-4.007-2.315-.004-4.633 4.01-2.315 4.01 2.318zm20.54-.504l-11.084 2.97-4.273-2.466v-4.625l4.221-2.426 11.136 2.983a2.59 2.59 0 101.337-5.005l-6.1-1.636 5.623-3.23a2.587 2.587 0 00.958-3.535 2.587 2.587 0 00-3.535-.958l-5.638 3.238 1.634-6.105a2.592 2.592 0 00-1.83-3.174c-1.377-.36-2.804.451-3.171 1.831L84.856 64.73l-4.252 2.442-4.03-2.331v-4.888l8.147-8.147a2.587 2.587 0 000-3.663 2.585 2.585 0 00-3.661 0l-4.485 4.484v-6.51a2.59 2.59 0 00-2.59-2.59 2.59 2.59 0 00-2.593 2.59v6.478l-4.45-4.452a2.587 2.587 0 00-3.663 0 2.587 2.587 0 000 3.663l8.113 8.115v4.941l-3.997 2.306-4.253-2.438-2.967-11.086a2.596 2.596 0 00-3.17-1.831 2.592 2.592 0 00-1.833 3.174l1.636 6.103-5.64-3.236a2.587 2.587 0 00-3.535.958 2.587 2.587 0 00.958 3.534l5.625 3.23-6.106 1.637a2.591 2.591 0 001.343 5.005l11.136-2.985 4.22 2.423.002 4.63-4.274 2.47-11.084-2.974a2.605 2.605 0 00-3.173 1.833 2.586 2.586 0 001.83 3.17l6.085 1.632-5.61 3.239a2.588 2.588 0 001.294 4.831c.442 0 .885-.108 1.296-.347l5.638-3.254-1.641 6.127a2.592 2.592 0 002.505 3.264 2.59 2.59 0 002.498-1.924l2.983-11.132 4.245-2.447 3.989 2.302v5.003l-8.113 8.117a2.588 2.588 0 001.83 4.42c.662 0 1.325-.251 1.833-.757l4.45-4.452v6.476a2.59 2.59 0 002.592 2.59 2.59 2.59 0 002.59-2.59v-6.51l4.486 4.486c.506.506 1.17.758 1.83.758.666 0 1.328-.252 1.831-.758a2.588 2.588 0 000-3.663l-8.146-8.15v-4.95l4.027-2.322 4.24 2.447 2.985 11.132a2.586 2.586 0 003.17 1.834 2.59 2.59 0 001.831-3.174l-1.643-6.127 5.64 3.254c.411.24.856.347 1.296.347a2.589 2.589 0 001.294-4.832l-5.61-3.238 6.081-1.632a2.586 2.586 0 001.834-3.17 2.597 2.597 0 00-3.17-1.833"></path></g></svg>
                )
            }
            case '50d': {
                return(
                    <svg viewBox="20 20 110 110"><path d="M86.077 62.383h-45.29a1.879 1.879 0 01-1.878-1.881c0-1.039.84-1.88 1.878-1.88h45.29a1.88 1.88 0 110 3.76M81.477 53.014H58.83a1.878 1.878 0 01-1.879-1.88c0-1.04.839-1.88 1.879-1.88h22.646a1.88 1.88 0 110 3.76M111.825 71.75H57.1a1.88 1.88 0 110-3.76h54.724a1.881 1.881 0 110 3.76M90.9 98.747H57.098a1.882 1.882 0 010-3.761h33.8a1.88 1.88 0 110 3.76M90.9 80.748H36.172a1.877 1.877 0 01-1.879-1.88c0-1.04.837-1.882 1.88-1.882h54.725a1.881 1.881 0 110 3.762M103.06 89.748H48.336a1.88 1.88 0 110-3.761h54.724a1.88 1.88 0 110 3.76" fill="#3b3c40"></path></svg>
                )
            }
        }

    }

    return (
        <>


        {getIcon()}

        {/* Day clear sky */}
        {/* <svg viewBox="20 20 110 110"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg> */}



        {/* Night clear sky */}
        {/* <svg viewBox="20 20 110 110"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.948 16.17-36.117 36.117-36.117 19.947 0 36.117 16.169 36.117 36.117" fill="#3b3c40"></path></svg> */}


        {/* day Few clouds */}
        {/* <svg viewBox="20 20 110 110"><path d="M121.66 68.27c0 14.186-11.5 25.687-25.687 25.687-14.187 0-25.687-11.5-25.687-25.688 0-14.186 11.5-25.687 25.687-25.687 14.187 0 25.688 11.5 25.688 25.687" fill="#f15d46"></path><path d="M42.82 72.456c.76 0 1.505.07 2.24.17a18.256 18.256 0 01-.41-3.833c0-10.112 8.2-18.31 18.313-18.31 9.838 0 17.842 7.765 18.269 17.5a10.938 10.938 0 017.366-2.853c6.067 0 10.987 4.922 10.987 10.989 0 1.383-.267 2.7-.731 3.918a12.966 12.966 0 012.561-.255c7.081 0 12.82 5.738 12.82 12.817 0 7.078-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.484 0-9.1 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg> */}


        {/* night few clouds */}
        {/* <svg viewBox="20 20 110 110"><path d="M121.66 68.27c0 14.186-11.5 25.688-25.687 25.688-14.187 0-25.687-11.502-25.687-25.688 0-14.185 11.5-25.687 25.687-25.687 14.187 0 25.688 11.502 25.688 25.687" fill="#3b3c40"></path><path d="M42.82 72.458c.76 0 1.505.068 2.24.168a18.249 18.249 0 01-.41-3.832c0-10.112 8.2-18.312 18.313-18.312 9.838 0 17.842 7.767 18.269 17.502a10.939 10.939 0 017.366-2.853c6.067 0 10.987 4.92 10.987 10.99 0 1.382-.267 2.698-.731 3.918a13.007 13.007 0 012.561-.256c7.081 0 12.82 5.737 12.82 12.815 0 7.083-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.478 0-9.104 7.377-16.482 16.48-16.482" fill="#efefed"></path></svg> */}


        {/* Scattered clouds */}
        {/* <svg viewBox="20 20 110 110"><path d="M46.533 68.506c.762 0 1.507.07 2.24.17a18.34 18.34 0 01-.409-3.834c0-10.112 8.198-18.31 18.313-18.31 9.838 0 17.843 7.765 18.269 17.5a10.935 10.935 0 017.367-2.852c6.067 0 10.986 4.922 10.986 10.989 0 1.382-.267 2.7-.734 3.918a13.1 13.1 0 012.565-.256c7.08 0 12.818 5.74 12.818 12.817 0 7.08-5.738 12.82-12.818 12.82H46.533c-9.103 0-16.481-7.38-16.481-16.482 0-9.101 7.378-16.48 16.481-16.48" fill="#efefed"></path></svg> */}


        {/* BrokenClouds */}
        {/* <svg viewBox="20 20 110 110" ><path d="M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892" fill="#3b3c40"></path><path d="M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg> */}


        {/* Shower Rain */}
        {/* MISSING */}



        {/* day rain */}
        {/* <svg viewBox="20 20 110 110" ><path d="M112.411 57.87c0 11.433-9.27 20.702-20.7 20.702-11.435 0-20.702-9.27-20.702-20.702 0-11.433 9.267-20.701 20.702-20.701 11.43 0 20.7 9.268 20.7 20.701" fill="#f15d46"></path><path d="M48.874 61.244c.612 0 1.21.055 1.805.137a14.679 14.679 0 01-.332-3.087c0-8.152 6.607-14.759 14.759-14.759 7.93 0 14.38 6.26 14.725 14.104a8.81 8.81 0 015.936-2.298 8.854 8.854 0 018.854 8.856 8.772 8.772 0 01-.59 3.157 10.425 10.425 0 012.065-.207c5.707 0 10.331 4.625 10.331 10.33 0 5.706-4.624 10.331-10.33 10.331H48.873c-7.335 0-13.285-5.948-13.285-13.282s5.95-13.282 13.285-13.282" fill="#efefed"></path><path d="M83.052 95.131l.423-1.13a2.172 2.172 0 10-4.069-1.523l-.422 1.132a2.172 2.172 0 104.068 1.521M77.548 109.845l1.483-3.962a1.517 1.517 0 00-.89-1.953l-1.226-.46a1.517 1.517 0 00-1.951.89l-1.483 3.965a1.515 1.515 0 00.889 1.951l1.226.459a1.514 1.514 0 001.952-.89M68.555 100.83l1.781-4.766a1.516 1.516 0 00-.89-1.953l-1.226-.458a1.515 1.515 0 00-1.952.89l-1.781 4.765a1.516 1.516 0 00.889 1.952l1.227.46a1.517 1.517 0 001.952-.89M65.864 108.023l.272-.73a2.173 2.173 0 00-4.068-1.523l-.274.732a2.172 2.172 0 004.07 1.521M60.885 89.073l.724-1.935a2.17 2.17 0 10-4.068-1.52l-.723 1.934a2.173 2.173 0 104.068 1.52M55.884 102.45l1.781-4.763a1.517 1.517 0 00-.889-1.955l-1.227-.458a1.519 1.519 0 00-1.953.89l-1.78 4.765a1.516 1.516 0 00.89 1.952l1.224.46a1.519 1.519 0 001.954-.89" fill="#3b3c40"></path></svg> */}


        {/* night rain */}
        {/* <svg viewBox="20 20 110 110"><path d="M112.411 57.87c0 11.433-9.27 20.702-20.7 20.702-11.435 0-20.702-9.27-20.702-20.702 0-11.433 9.267-20.701 20.702-20.701 11.43 0 20.7 9.268 20.7 20.701" fill="#3b3c40"></path><path d="M48.874 61.244c.612 0 1.21.055 1.805.137a14.679 14.679 0 01-.332-3.087c0-8.152 6.607-14.759 14.759-14.759 7.93 0 14.38 6.26 14.725 14.104a8.81 8.81 0 015.936-2.298 8.854 8.854 0 018.854 8.856 8.772 8.772 0 01-.59 3.157 10.425 10.425 0 012.065-.207c5.707 0 10.331 4.625 10.331 10.33 0 5.706-4.624 10.331-10.33 10.331H48.873c-7.335 0-13.285-5.948-13.285-13.282s5.95-13.282 13.285-13.282" fill="#efefed"></path><path d="M83.052 95.131l.423-1.13a2.172 2.172 0 10-4.069-1.523l-.422 1.132a2.172 2.172 0 104.068 1.521M77.548 109.845l1.483-3.962a1.517 1.517 0 00-.89-1.953l-1.226-.46a1.517 1.517 0 00-1.951.89l-1.483 3.965a1.515 1.515 0 00.889 1.951l1.226.459a1.514 1.514 0 001.952-.89M68.555 100.83l1.781-4.766a1.516 1.516 0 00-.89-1.953l-1.226-.458a1.515 1.515 0 00-1.952.89l-1.781 4.765a1.516 1.516 0 00.889 1.952l1.227.46a1.517 1.517 0 001.952-.89M65.864 108.023l.272-.73a2.173 2.173 0 00-4.068-1.523l-.274.732a2.172 2.172 0 004.07 1.521M60.885 89.073l.724-1.935a2.17 2.17 0 10-4.068-1.52l-.723 1.934a2.173 2.173 0 104.068 1.52M55.884 102.45l1.781-4.763a1.517 1.517 0 00-.889-1.955l-1.227-.458a1.519 1.519 0 00-1.953.89l-1.78 4.765a1.516 1.516 0 00.89 1.952l1.224.46a1.519 1.519 0 001.954-.89" fill="#3b3c40"></path></svg> */}


        {/* Thunderstorm */}
        {/* MISSING */}


        {/* Snow */}
        {/* <svg viewBox="20 20 110 110"><g fill="#3b3c40"><path d="M78.009 76.286l-4.01 2.315-4.007-2.315-.004-4.633 4.01-2.315 4.01 2.318zm20.54-.504l-11.084 2.97-4.273-2.466v-4.625l4.221-2.426 11.136 2.983a2.59 2.59 0 101.337-5.005l-6.1-1.636 5.623-3.23a2.587 2.587 0 00.958-3.535 2.587 2.587 0 00-3.535-.958l-5.638 3.238 1.634-6.105a2.592 2.592 0 00-1.83-3.174c-1.377-.36-2.804.451-3.171 1.831L84.856 64.73l-4.252 2.442-4.03-2.331v-4.888l8.147-8.147a2.587 2.587 0 000-3.663 2.585 2.585 0 00-3.661 0l-4.485 4.484v-6.51a2.59 2.59 0 00-2.59-2.59 2.59 2.59 0 00-2.593 2.59v6.478l-4.45-4.452a2.587 2.587 0 00-3.663 0 2.587 2.587 0 000 3.663l8.113 8.115v4.941l-3.997 2.306-4.253-2.438-2.967-11.086a2.596 2.596 0 00-3.17-1.831 2.592 2.592 0 00-1.833 3.174l1.636 6.103-5.64-3.236a2.587 2.587 0 00-3.535.958 2.587 2.587 0 00.958 3.534l5.625 3.23-6.106 1.637a2.591 2.591 0 001.343 5.005l11.136-2.985 4.22 2.423.002 4.63-4.274 2.47-11.084-2.974a2.605 2.605 0 00-3.173 1.833 2.586 2.586 0 001.83 3.17l6.085 1.632-5.61 3.239a2.588 2.588 0 001.294 4.831c.442 0 .885-.108 1.296-.347l5.638-3.254-1.641 6.127a2.592 2.592 0 002.505 3.264 2.59 2.59 0 002.498-1.924l2.983-11.132 4.245-2.447 3.989 2.302v5.003l-8.113 8.117a2.588 2.588 0 001.83 4.42c.662 0 1.325-.251 1.833-.757l4.45-4.452v6.476a2.59 2.59 0 002.592 2.59 2.59 2.59 0 002.59-2.59v-6.51l4.486 4.486c.506.506 1.17.758 1.83.758.666 0 1.328-.252 1.831-.758a2.588 2.588 0 000-3.663l-8.146-8.15v-4.95l4.027-2.322 4.24 2.447 2.985 11.132a2.586 2.586 0 003.17 1.834 2.59 2.59 0 001.831-3.174l-1.643-6.127 5.64 3.254c.411.24.856.347 1.296.347a2.589 2.589 0 001.294-4.832l-5.61-3.238 6.081-1.632a2.586 2.586 0 001.834-3.17 2.597 2.597 0 00-3.17-1.833"></path></g></svg> */}


        {/* Mist */}
        {/* <svg viewBox="20 20 110 110"><path d="M86.077 62.383h-45.29a1.879 1.879 0 01-1.878-1.881c0-1.039.84-1.88 1.878-1.88h45.29a1.88 1.88 0 110 3.76M81.477 53.014H58.83a1.878 1.878 0 01-1.879-1.88c0-1.04.839-1.88 1.879-1.88h22.646a1.88 1.88 0 110 3.76M111.825 71.75H57.1a1.88 1.88 0 110-3.76h54.724a1.881 1.881 0 110 3.76M90.9 98.747H57.098a1.882 1.882 0 010-3.761h33.8a1.88 1.88 0 110 3.76M90.9 80.748H36.172a1.877 1.877 0 01-1.879-1.88c0-1.04.837-1.882 1.88-1.882h54.725a1.881 1.881 0 110 3.762M103.06 89.748H48.336a1.88 1.88 0 110-3.761h54.724a1.88 1.88 0 110 3.76" fill="#3b3c40"></path></svg> */}


        </>
    )
}

export default WeatherIcon
