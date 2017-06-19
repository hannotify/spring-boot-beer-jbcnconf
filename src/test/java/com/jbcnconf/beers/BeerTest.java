package com.jbcnconf.beers;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.util.Collection;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BeerTest {

    @Autowired
    private BeerRepository beerRepository;

    @Before
    public void setup() {
        Beer beer = new Beer();
        beer.setName("Westvleteren 12");
        beer.setStyle("Quadrupel");
        beer.setAbv(12.0);
        beerRepository.save(beer);
    }

    @Test
    public void testFindAllBeers() {
        Collection<Beer> beers = (Collection<Beer>) beerRepository.findAll();
        assertThat(beers.size(), is(1));
    }

}
