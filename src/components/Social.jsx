import React from 'react'
import { GithubIcon } from '@material-ui/icons/GitHub'
import { TwitterIcon } from '@material-ui/icons/Twitter'
import { LinkedInIcon } from '@material-ui/icons/LinkedIn'

const socialItems = [
    {icon:GithubIcon,url:"https://github.com/Nishabhooshan"},
    {icon:TwitterIcon,url:"https://twitter.com/"},
    {icon:LinkedInIcon,url:"https://www.linkedin.com/in/nisha-bhooshan/"}
]

export default function Social() {
  return (
    <div>
         {socialItems.map((item) => <item.icon/>) }
    </div>
  )
}
