package com.example.samnest_back.travel_plan.repository;

import com.example.samnest_back.travel_plan.entity.TravelPlanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelPlanRepository extends JpaRepository<TravelPlanEntity, Integer> {
}
