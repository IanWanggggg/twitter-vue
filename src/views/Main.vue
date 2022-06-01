<template>
  <div class="Main">
    <Navbar @postTweetSubmit="fetchData" id="Navbar" />
    <div class="mainSection">
      <div class="mainSectionContent">
        <div class="mainTitle">
          <h1>首頁</h1>
        </div>
        <MainPostTweet @postTweetSubmit="fetchData" :currentUser="currentUser" />
        <AllTweets @replyTweetSubmit="fetchData" :initialCurrentTweets="currentTweets" />
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MainPostTweet from "../components/MainPostTweet.vue";
import AllTweets from "../components/AllTweets.vue";
import PopularUsers from "../components/PopularUsers.vue";
import { mapState } from "vuex";
import tweetsAPI from "../apis/tweets";
import { Toast } from '../utility/helpers';

export default {
  components: {
    Navbar,
    MainPostTweet,
    AllTweets,
    PopularUsers,
  },
  data() {
    return {
      currentTweets: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "token"]),
  },
  methods: {
    async fetchData() {
      try {
        const {data} = await tweetsAPI.getTweets();

        this.currentTweets = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '推文取得失敗'
        })
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.Main {
  width: 100%;
  display: grid;
}

#Navbar {
  justify-self: start;
  margin-left: 130px;
  /* width: 178px; */
}

#PopularUsers {
  position: fixed;
  justify-self: end;
  margin-right: 130px;
  top: 0px;
  bottom: 0px;
  overflow-y: scroll;
  /* width: 273px; */
}

.mainSection {
  position: absolute;
  width: 640px;
  margin-left: 332px;
  top: 0px;
  bottom: 0px;
  overflow-y:scroll;
}

.mainSection::-webkit-scrollbar {
  display: none;
}

.mainSectionContent {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.mainTitle {
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #e6ecf0;
  padding: 24px 23px;
  font-size: 24px;
  font-weight: 700;
  color: #1c1c1c;
}
</style>