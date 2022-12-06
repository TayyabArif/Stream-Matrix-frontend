import React from 'react'
import { Grid, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

const sharePolicy =[
  'Payment Information. We only use payment information, such as credit / debit card numbers, as necessary for completing a particular transaction or fulfilling a service (for example, processing payments from our Tapmad Plus subscribers) and to prevent abuse of the Tapmad Services.',
  `Other Information. We use the other information we collect from or about you in order to establish and enhance our relationship with you and to help deliver a first-class user experience. Tapmad's use of this information includes the following general purposes: contacting you; customizing the content and advertising your view; fulfilling your requests for products or services; identifying content you share when you use the Tapmad Services; improving our services; conducting research; compiling aggregate data for internal and external business purposes; preventing potentially illegal activities; protecting our rights; other uses in accordance with our Terms of Use; and for any other purpose disclosed to you at the time we collect your information.`
]
const Privacy = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}} >
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        About Stream Matrix
      </Typography>
      <Typography
      fontSize= '1rem'
      fontWeight = ''
      sx={{color: 'gray'}}
      >
        Below you will find our updated Privacy Policy, effective as of June 02, 2022. This Privacy Policy covers the information collected from or about you and your activities when you use the Stream Matrix Services. It also provides information about our relationships with certain third parties that provide services in connection with the Stream Matrix Services. If you have any questions or concerns about our Privacy Policy, please let us know by emailing us at
        <span style={{color: 'white', marginLeft: '5px'}}>customerservices@streammatrix.com</span>
      </Typography><br />
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        How We Share This Information
      </Typography>
      <Typography
        fontSize= '1.2rem'
        fontWeight = ''
        sx={{color: 'white', mb: 1}}
        >
        With whom does Stream Matrix share the information it collects from or about me?
      </Typography>
      <Typography
      fontSize= '1rem'
      fontWeight = ''
      sx={{color: 'gray'}}
      >
        Other Stream Matrix Users. The Stream Matrix Services include social features that let you interact with other people who use them. Information that you voluntarily make public on the Stream Matrix Services will be shared with other Stream Matrix users. For example, if your Stream Matrix username includes your real name, when you post a comment it will be associated with your real name. You can control the sharing of certain information contained in your Stream Matrix profile or about your activities on the Stream Matrix Services with others on the Privacy and Settings page.
      </Typography><br />
      <Typography
      fontSize= '1rem'
      fontWeight = ''
      sx={{color: 'gray'}}
      >
        Business Partners. We may share the information collected from or about you with our business partners, including advertisers and other companies that are not affiliated with Stream Matrix, in aggregated or non-personally identifiable forms. Otherwise, except when such business partners are acting on our behalf or when you have provided your information as part of a co-branded promotion, we will obtain your consent before we share your contact information with them so that they may send you promotional information about their products and services directly.
    </Typography><br />
    <Typography
      fontSize= '1rem'
      fontWeight = ''
      sx={{color: 'gray'}}
    >
      Other Parties When Required By Law or When Necessary to Protect Your Rights or Ours. There may be instances when we may disclose your information without providing you with a choice in order to protect the legal rights of Stream Matrix or its affiliates, and each of their respective investors, directors, officers, employees, agents, and suppliers; to protect the safety and security of users of the Stream Matrix Services or to enforce our Terms of Use; to protect against fraud or for risk management purposes; or to comply with or respond to the law or legal process or a request for cooperation by a government entity, whether or not legally required. If you notify us that you believe your legal rights have been violated by Stream Matrix or another user of the Stream Matrix Services, we may provide the information that you provide to us to others to the extent that we believe it is necessary to evaluate and respond to your complaint. For instance, if you submit a notice of copyright infringement to us, we may send a copy to the person or entity who uploaded, stored, or transmitted the material addressed by the communication.
    </Typography><br />
    <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        How We Use This Information
      </Typography>
      <Typography
        fontSize= '1.2rem'
        fontWeight = ''
        sx={{color: 'white', mb: 1}}
        >
        How does Tapmad use information it collects from or about me?
      </Typography>
      {
        sharePolicy.map( (data, index) => {
          return(
            <Grid container item key={index} sx={{width: '100%'}} alignItems = 'center'>
              <DoneIcon sx={{color: 'success.main'}} />
              <Typography
                fontSize= '0.9rem'
                fontWeight = 'bold'
                sx={{color: 'gray', mb: 0.5, width: '95%', pt: '15px', ml: 2}}
                >
                {data}
              </Typography>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Privacy
