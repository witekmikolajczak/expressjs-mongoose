interface AuthInterface {
  logout: (user: Parse.User<Parse.Attributes> | undefined) => Promise<void>;
}

export class Auth implements AuthInterface {
  async logout(user: Parse.User<Parse.Attributes> | undefined): Promise<void> {
    
    const Session = Parse.Object.extend('_Session')
    new Parse.Query(Session)
  }
}
