<template>
  <div class="UserSelfContainer">
    <Navbar @postTweetSubmit="fetchData(currentUser.id)" id="Navbar" />
    <div v-show="currentUser.name" class="UserSelfMain">
      <div class="userTitle">
        <router-link to="/main">
          <img class="backIcon" src="../assets/Vector.png" alt="" />
        </router-link>
        <div class="userInfo">
          <h1 class="infoName">{{ currentUser.name }}</h1>
          <span class="infoTweetsNumber">{{ userTweets.length }}則推文</span>
        </div>
      </div>
      <UserSelfCard @userEditSubmit="fetchData(currentUser.id)" :initialCurrentUser="currentUser" />
      <UserTabs />
      <UserTweets
        @replyTweetSubmit="fetchData(currentUser.id)"
        v-if="$route.path == '/user/self/tweets'"
        :initialCurrentTweets="userTweets"
      />
      <Comments
        v-if="$route.path == '/user/self/comments'"
        :currentRepliedTweets="userComments"
      />
      <UserLikesTweets
        @replyTweetSubmit="fetchData(currentUser.id)"
        v-if="$route.path == '/user/self/likes'"
        :initialCurrentTweets="userLikes"
      />
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import UserTabs from "../components/UserTabs.vue";
import UserSelfCard from "../components/UserSelfCard.vue";
import UserTweets from "../components/UserTweets.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utility/helpers";
import Comments from "../components/Comments.vue";
import UserLikesTweets from "../components/UserLikesTweets.vue";

export default {
  components: {
    Navbar,
    PopularUsers,
    UserTabs,
    UserSelfCard,
    UserTweets,
    Comments,
    UserLikesTweets,
  },

  data() {
    return {
      userTweets: [],
      userComments: [],
      userLikes: [],
      currentUser: {
        Followers: -1,
        Followings: -1,
        account: "",
        avatar: "",
        cover: "",
        createdAt: "",
        email: "",
        id: -1,
        introduction: "",
        name: "",
        role: "",
        updatedAt: "",
      },
    };
  },

  methods: {
    async fetchData(id) {
      try {
        const { data } = await usersAPI.getUser({ id });
        this.currentUser = data;

        const responseUserTweets = await usersAPI.getUserTweets({
          id,
        });
        this.userTweets = responseUserTweets.data;

        const responseUserComments = await usersAPI.getUserRepliedTweets({
          id,
        });
        this.userComments = responseUserComments.data.filter((item) => item.Tweet !== null ) ;

        const responseUserLikes = await usersAPI.getUserLikes({
          id,
        });
        this.userLikes = responseUserLikes.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者推文",
        });
      }
    },
  },

  created() {
    const id = this.$store.state.currentUser.id;
    this.fetchData(id);
  },
};
</script>

<style scoped>
.UserSelfContainer {
  width: 100%;
  display: grid;
  border: 0.1px solid white;
}

#Navbar {
  justify-self: start;
  margin-left: 130px;
  /* width: 210px; */
}

#PopularUsers {
  justify-self: start;
  margin-left: 1000px;
  /* width: 273px; */
}

.UserSelfMain {
  position: absolute;
  width: 640px;
  margin-left: 332px;
  overflow-y:scroll;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.UserSelfMain::-webkit-scrollbar {
  display: none;
}

.userTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 28px;
  height: 74px;
  border-bottom: 1px solid #e6ecf0;
}

.backIcon {
  width: 17px;
  height: 14px;
}

.userInfo {
  margin-left: 19px;
}

.infoName {
  font-weight: 700;
  font-size: 18px;
  height: 24px;
  line-height: 26px;
}

.infoTweetsNumber {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #6c757d;
}
</style>

