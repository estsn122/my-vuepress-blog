<template>
  <footer class="footer">
    <div class="footer-center-wrap">
      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  CodesandboxIcon,
 FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  PhoneIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
} from 'vue-feather-icons'
export default {
  components: {
    CodepenIcon,
    CodesandboxIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    MusicIcon,
    PhoneIcon,
    TwitterIcon,
    VideoIcon,
    YoutubeIcon,
  },
  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },
  },
  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'codepen':
          return 'CodepenIcon'
        case 'codesandbox':
          return 'CodesandboxIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'github':
          return 'GithubIcon'
        case 'gitlab':
          return 'GitlabIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'mail':
          return 'MailIcon'
        case 'messenger':
          return 'MessageSquareIcon'
        case 'music':
          return 'MusicIcon'
        case 'phone':
          return 'PhoneIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'video':
          return 'VideoIcon'
        case 'web':
          return 'GlobeIcon'
        case 'youtube':
          return 'YoutubeIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
ol, ul
  list-style none
  margin 0
  padding 0
.footer
  min-height 60px
  box-sizing border-box
  background-color $footerBgColor
  display flex
  padding 15px 32px
  .footer-center-wrap
    line-height 30px
    flex 1
    .contact
      display flex
      flex-wrap wrap
      justify-content center
      .contact-item
        margin-right 10px
        a
          font-size 12px
          color $footerColor
          text-decoration none
          transition color 0.3s
          &:hover
            color #FFF
@media (max-width: $MQMobile)
  .footer
    min-height 100px
    flex-direction column
    .footer-left-wrap
      align-items center
      justify-content center
</style> 
