package org.test;

import android.support.multidex.MultiDexApplication;

import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

// Needed for `react-native link`
// import com.facebook.react.ReactApplication;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainApplication extends MultiDexApplication {

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        // Add your own packages here!
        // TODO: add cool native modules

        // Needed for `react-native link`
        // new MainReactPackage(),
            new RNGooglePlacesPackage(),
            new VectorIconsPackage()
    );
  }
}
