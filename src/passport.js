import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {UserRegister} from './data/models';

/**
 * Sign in with Username & Password
 */
passport.use(
  new LocalStrategy((username, password, done) => {
    UserRegister.findAll()
      .then(users => {
        users.map(user => {
          if (!user) return;
          if (user.password !== password) return;
          return done(null, true, user);
        });
      })
  }),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;
